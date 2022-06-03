import Image from "next/image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CardContainer = tw.div`w-full md:w-3/12 p-2.5 flex flex-col items-center justify-center py-5 px-10 cursor-pointer`;
const CardTitle = tw.h1`text-3xl md:text-2xl font-bold text-red-700`;
const Price = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: rgba(55, 65, 81);
`;
const CardDesc = tw.p`text-2xl text-gray-700`;

const PizzaCard = ({ pizza }) => {
  return (
    <CardContainer>
      <Link href={`/product/${pizza._id}`}>
        <Image src={pizza.img} alt="" width={500} height={500} />
      </Link>
      <CardTitle>{pizza.title}</CardTitle>
      <Price>{pizza.prices[0]}$</Price>
      <CardDesc>{pizza.desc}</CardDesc>
    </CardContainer>
  );
};

export default PizzaCard;
