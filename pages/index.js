import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../src/components/Add";
import AddButton from "../src/components/AddButton";
import Featured from "../src/components/Featured";
import PizzaList from "../src/components/PizzaList";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div>
      <Head>
        <title>Minut Dva Dostava</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      {!close && <Add setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(
    "https://delivery-app-mladenovic-13.vercel.app/api/products"
  );

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
