import axios from "axios";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import {
  CartProductTotal,
  CartProductTable,
} from "../../src/styled/cart.styled";

const OrderContainer = styled.div`
  padding: 50px;
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const OrderLeft = styled.div`
  flex: 2;
`;
const OrderRight = styled.div`
  flex: 1;
`;
const CartProductTotalPaid = styled(CartProductTotal)`
  .button {
    cursor: not-allowed;
    font-weight: 700;
    font-size: 20px;
  }
`;
const Row = styled.div`
  width: 100%;
  &:last-child {
    justify-content: space-between;
    display: flex;
    width: 60%;
    margin: auto;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;

const CartProductTableId = styled(CartProductTable)`
  width: 100%;
  .productTable {
    width: 100%;
    text-align: left;
    margin-bottom: 50px;
  }
  .name {
  }
  .address {
  }
  .customer {
  }
  .total {
  }
`;

// PULSING ANIMATION
const pulse = keyframes`
  from {
    opacity:0.1;
  }
  to{
    opacity:0.9;
  }
`;
const StatusPulse = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${pulse} 1s ease infinite alternate;
  .checkedIcon {
    display: none;
  }
`;
const StatusDone = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StatusUndone = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .checkedIcon {
    display: none;
  }
  opacity: 0.3;
`;

const Order = ({ order }) => {
  return (
    <OrderContainer>
      <OrderLeft>
        <Row>
          <CartProductTableId>
            <table className="productTable">
              <tbody>
                <tr className="trTitle">
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>
                <tr className="tr">
                  <td>
                    <span className="id">{order._id}</span>
                  </td>
                  <td>
                    <span className="name">{order.customer}</span>
                  </td>
                  <td>
                    <span className="address">{order.address}</span>
                  </td>
                  <td>
                    <span className="total">${order.total}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CartProductTableId>
        </Row>
        <Row>
          <StatusDone>
            <Image src="/img/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              ></Image>
            </div>
          </StatusDone>
          <StatusPulse>
            <Image src="/img/bake.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <div className="checkedIcon">
              <Image
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              ></Image>
            </div>
          </StatusPulse>
          <StatusUndone>
            <Image src="/img/bike.png" alt="" width={30} height={30} />
            <span>On the way</span>
            <div className="checkedIcon">
              <Image
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              ></Image>
            </div>
          </StatusUndone>
          <StatusUndone>
            <Image src="/img/delivered.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              ></Image>
            </div>
          </StatusUndone>
        </Row>
      </OrderLeft>
      <OrderRight>
        <CartProductTotalPaid>
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
            <button disabled className="button">
              PAID
            </button>
          </div>
        </CartProductTotalPaid>
      </OrderRight>
    </OrderContainer>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
