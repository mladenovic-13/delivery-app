import Image from "next/image";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const ProductContainer = styled.div`
  height: calc(100vh - 98px);
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const ImgContainer = tw.div``;

const Product = () => {
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
          <Image src={pizza.img} alt="" layout="fill" />
        </ImgContainer>
      </Left>
      <Right></Right>
    </ProductContainer>
  );
};

export default Product;
