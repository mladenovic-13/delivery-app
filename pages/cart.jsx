import Image from "next/image";
import styled from "styled-components";
import { CartProductTotal, CartProductTable } from "../src/styled/cart.styled";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";

// React-PayPal integration
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";

const CartContainer = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post(
        "https://delivery-app-six.vercel.app/api/orders",
        data
      );
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                paymentMethod: 1,
              });
            });
          }}
        />
      </>
    );
  };
  ////////////////////////////////////////

  return (
    <CartContainer>
      <CartProductTable>
        <table className="productTable">
          <tbody>
            <tr className="trTitle">
              <th></th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((item, index) => (
              <tr key={index} className="tr">
                <td>
                  <div className="imgContainer">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className="name">{item.title}</span>
                </td>
                <td>
                  <span className="extras">
                    {item.extras.map((extra) => (
                      <span key={extra._id}>
                        {extra.text}
                        <br />
                      </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className="price">${item.price}</span>
                </td>
                <td>
                  <span className="quantity">{item.quantity}</span>
                </td>
                <td>
                  <span className="total">${item.quantity * item.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CartProductTable>
      <CartProductTotal>
        <div className="wrapper">
          <h2 className="title">CART TOTAL</h2>
          <div className="totalText">
            <b className="totalTextTitle">Subtotal:</b>${cart.total}
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Total:</b>${cart.total}
          </div>

          {open ? (
            <PayPalScriptProvider
              options={{
                "client-id":
                  "Ad309Uk4S-XvXkUEnHf_XBvcbpX7A9vdRfFVaae2OlITQk__wQR3IhQlQU10BA601_Devmp2qCNWcHq-",
                components: "buttons",
                currency: "USD",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          ) : (
            <button onClick={() => setOpen(true)} className="button">
              CHECKOUT NOW
            </button>
          )}
        </div>
      </CartProductTotal>
    </CartContainer>
  );
};

export default Cart;
