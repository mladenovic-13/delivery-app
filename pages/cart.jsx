import Image from "next/image";
import styled from "styled-components";
import { CartProductTotal, CartProductTable } from "../src/styled/cart.styled";

const CartContainer = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Cart = () => {
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
          <tr className="tr">
            <td>
              <div className="imgContainer">
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className="name">CORALZO</span>
            </td>
            <td>
              <span className="extras">Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span className="price">$19.90</span>
            </td>
            <td>
              <span className="quantity">2</span>
            </td>
            <td>
              <span className="total">$39.80</span>
            </td>
          </tr>
          <tr className="tr">
            <td>
              <div className="imgContainer">
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className="name">CORALZO</span>
            </td>
            <td>
              <span className="extras">Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span className="price">$19.90</span>
            </td>
            <td>
              <span className="quantity">2</span>
            </td>
            <td>
              <span className="total">$39.80</span>
            </td>
          </tr>
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
