import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Genre, Movie } from "tmdb-typescript-api";
import { Header } from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import { responses } from "../utils/results";
type HomeProps = {
  results: Movie[];
};
const Home: NextPage<HomeProps> = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
};
export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as keyof typeof requests | undefined;
  const response = responses[genre ? genre : "fetchTrending"];
console.log(genre);
  const { results } = response;
 
  return {
    props: { results },
  };
};
