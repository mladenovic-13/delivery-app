import styled from "styled-components";

export const CartProductTotal = styled.div`
  margin-top: 10px;
  flex: 1;
  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .wrapper {
    width: 90%;
    max-height: 300px;
    background-color: #333;
    padding: 50px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
  }
  .totalText {
    font-size: 20px;
  }
  .totalTextTitle {
    margin-right: 10px;
    font-size: 18px;
  }

  .button {
    height: 40px;
    color: black;
    cursor: pointer;
    margin-top: 20px;
    background-color: white;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const CartProductTable = styled.div`
  text-align: center;
  th,
  td {
    padding: 10px 15px;
  }
  .imgContainer {
    width: 100px;
    height: 100px;
    position: relative;
  }
  .table {
    width: 100%;
  }
  .name {
    font-weight: 500;
    color: #d1411e;
    font-size: 18px;
  }
  .total {
    font-weight: 500;
    font-size: 18px;
  }
  flex: 2;

  @media only screen and (max-width: 480px) {
    .productTable {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .trTitle {
      display: none;
    }

    .tr {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .imgContainer {
      width: 35vw;
      height: 35vw;
    }
    .name,
    .total {
      font-size: 24px;
    }

    .extras,
    .price,
    .quantity {
      font-size: 22px;
    }

    .price::before {
      content: "Price: ";
      font-weight: 500;
    }
    .quantity::before {
      content: "Quantity: ";
      font-weight: 500;
    }
    .total::before {
      content: "Total: ";
      font-weight: 500;
    }

    .wrapper {
      width: 100%;
    }
  }
`;
