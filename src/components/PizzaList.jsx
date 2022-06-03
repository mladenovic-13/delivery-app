import React from "react";
import tw from "twin.macro";
import PizzaCard from "./PizzaCard";

const PizzaListContainer = tw.div`py-5 px-2.5 flex flex-col items-center text-center`;
const PizzaTitle = tw.h1`text-center text-4xl font-bold`;
const PizzaDesc = tw.p`w-9/12 text-center text-2xl font-medium text-gray-700 md:w-8/12`;
const ListWrapper = tw.div`flex flex-wrap items-center justify-between w-full`;

const PizzaList = ({ pizzaList }) => {
  return (
    <PizzaListContainer>
      <PizzaTitle>BEST PIZZA IN TOWN</PizzaTitle>
      <PizzaDesc>
        This is the place where you can but best pizza for best price!
      </PizzaDesc>
      <ListWrapper>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </ListWrapper>
    </PizzaListContainer>
  );
};

export default PizzaList;
