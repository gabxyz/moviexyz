import { type NextPage } from "next";
import Head from "next/head";
import SelectTheme from "../components/SelectTheme";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>movie explorer</title>
        <meta name="description" content="explore and discover random movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1>movie explorer</h1>
          <button className="rounded-lg border border-gray-7 bg-gray-3 px-4 py-2 text-sm font-light shadow-md hover:border-gray-8 motion-safe:duration-150 motion-safe:ease-productive-standard">
            pick random movie
          </button>
        </div>
        <SelectTheme />
      </main>
    </>
  );
};

export default Home;
