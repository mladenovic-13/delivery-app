import Image from "next/image";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const ProductContainer = styled.div`
  height: calc(100vh - 98px);
  display: flex;
  @media screen and (max-width: 480px) {
    height: auto;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
  }
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ImgContainer = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 60vw;
    height: 60vw;
  }
`;

const PizzaName = tw.h1`text-3xl font-semibold`;
const PizzaPrice = tw.div`text-red-700 text-2xl font-medium my-4`;
const PizzaDesc = tw.div`text-xl text-gray-700 font-light`;
const SizeLabel = tw.h3`text-xl font-semibold my-4`;
const Sizes = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 10px;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0px 20px;
  }
`;
const Size = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  &:nth-child(2) {
    width: 60px;
    height: 60px;
  }
  &:nth-child(3) {
    width: 70px;
    height: 70px;
  }
`;
const SizeNum = styled.div`
  position: absolute;
  top: -5px;
  right: -20px;
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 10px;
  font-weight: 700;
`;

const PizzaExtras = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
  .container {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
  }
  .option {
    margin-left: 10px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 400;
  }
  .checkbox {
    margin-right: 10px;
    width: 16px;
    height: 16px;
    background-color: red;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 60%;
    margin: auto;
    .option {
      margin: 5px 0;
      font-size: 18px;
    }

    .checkbox {
      width: 20px;
      height: 20px;
    }
    .extrasLabel {
      text-align: left;
    }
  }
`;

const AddToCart = styled.div`
  .quantity {
    width: 50px;
    height: 40px;
    text-align: center;
    border: 2px solid red;
    &:focus {
      outline: red;
    }
  }
  .add {
    height: 40px;
    padding: 1px 5px;
    background-color: red;
    color: white;
    font-weight: 600;
    border: none;
    margin-left: 10px;
  }
  margin-top: 15px;

  @media screen and (max-width: 480px) {
    .quantity,
    .add {
      margin-top: 20px;
      height: 50px;
      padding: 10px 20px;
    }
  }
`;

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  };

  const handleExtra = (e, op) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(op.price);
      setExtras((prev) => [...prev, op]);
    } else {
      changePrice(-op.price);
      setExtras(extras.filter((extra) => extra._id != op._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <ProductContainer>
      <Left>
        <ImgContainer>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </ImgContainer>
      </Left>
      <Right>
        <PizzaName>{pizza.title}</PizzaName>
        <PizzaPrice>${price}</PizzaPrice>
        <PizzaDesc>{pizza.desc}</PizzaDesc>
        <SizeLabel>Choose youre size:</SizeLabel>
        <Sizes>
          <Size onClick={() => handleSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SizeNum>Small</SizeNum>
          </Size>
          <Size onClick={() => handleSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SizeNum>Medium</SizeNum>
          </Size>
          <Size onClick={() => handleSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SizeNum>Large</SizeNum>
          </Size>
        </Sizes>
        <PizzaExtras>
          <div className="container">
            <h3 className="extrasLabel">Choose extras:</h3>
            {pizza.extraOptions.map((op) => (
              <div key={op._id} className="option">
                <input
                  type="checkbox"
                  name={op.text}
                  id={op.text}
                  className="checkbox"
                  onClick={(e) => handleExtra(e, op)}
                />
                <label htmlFor={op.text}>{op.text}</label>
              </div>
            ))}
          </div>
        </PizzaExtras>
        <AddToCart>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={1}
            className="quantity"
          />
          <button onClick={handleClick} className="add">
            ADD TO CART
          </button>
        </AddToCart>
      </Right>
    </ProductContainer>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
