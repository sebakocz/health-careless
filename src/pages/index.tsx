import type { NextPage } from "next";
import Head from "next/head";
import Disclaimer from "../components/disclaimer";
import Game from "../components/game/game";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Health Careless</title>
        <meta name="description" content="Educating physicians & medical students about healthcare oppression." />
        <link rel="icon" href="/heart pixel art 254x254.ico" />
      </Head>

      <Game/>
    </>
  );
};

export default Home;
