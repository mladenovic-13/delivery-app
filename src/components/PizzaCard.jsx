import Image from "next/image";
import React from "react";
import tw from "twin.macro";

const CardContainer = tw.div`w-3/12 p-2.5 flex flex-col items-center justify-center py-5 px-10 cursor-pointer`;
const CardTitle = tw.h1`text-2xl font-bold text-red-700`;
const CardPrice = tw.span`text-lg font-semibold text-gray-700`;
const CardDesc = tw.p`text-gray-700`;

const PizzaCard = () => {
  return (
    <CardContainer>
      <Image src="/img/pizza.png" alt="" width={500} height={500} />
      <CardTitle>Vesuvio</CardTitle>
      <CardPrice>$19.90</CardPrice>
      <CardDesc>Basic Pizza with only ham and cheese.</CardDesc>
    </CardContainer>
  );
};

export default PizzaCard;
