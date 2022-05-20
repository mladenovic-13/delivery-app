import Image from "next/image";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useState } from "react";

const ProductContainer = styled.div`
  height: calc(100vh - 98px);
  display: flex;
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
`;

const PizzaName = tw.h1`text-3xl font-semibold`;
const PizzaPrice = tw.div`text-red-700 text-2xl font-medium my-4`;
const PizzaDesc = tw.div`text-xl text-gray-700 font-light`;
const SizeLabel = tw.h3`text-lg font-semibold my-4`;
const Sizes = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
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

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "VESUVIO",
    price: [19.9, 23.9, 27.9],
    desc: "Basic Pizza with only ham and cheese.",
  };

  return (
    <ProductContainer>
      <Left>
        <ImgContainer>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </ImgContainer>
      </Left>
      <Right>
        <PizzaName>{pizza.name}</PizzaName>
        <PizzaPrice>${pizza.price[size]}</PizzaPrice>
        <PizzaDesc>{pizza.desc}</PizzaDesc>
        <SizeLabel>Choose youre size:</SizeLabel>
        <Sizes>
          <Size>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SizeNum>Small</SizeNum>
          </Size>
          <Size>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SizeNum>Medium</SizeNum>
          </Size>
          <Size>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SizeNum>Large</SizeNum>
          </Size>
        </Sizes>
      </Right>
    </ProductContainer>
  );
};

export default Product;
