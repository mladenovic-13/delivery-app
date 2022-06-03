import Image from "next/image";
import styled from "styled-components";
import { CartProductTotal, CartProductTable } from "../src/styled/cart.styled";
import { useDispatch, useSelector } from "react-redux";

const CartContainer = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <CartContainer>
      <CartProductTable>
        <table className="productTable">
          <tr className="trTitle">
            <th></th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.products.map((item) => (
            <tr key={item._id} className="tr">
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
        </table>
      </CartProductTable>
      <CartProductTotal>
        <div className="wrapper">
          <h2 className="title">CART TOTAL</h2>
          <div className="totalText">
            <b className="totalTextTitle">Subtotal:</b>$79.60
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Total:</b>$79.60
          </div>
          <button className="button">CHECKOUT NOW</button>
        </div>
      </CartProductTotal>
    </CartContainer>
  );
};

export default Cart;
