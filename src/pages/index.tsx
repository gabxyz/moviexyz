import { type NextPage } from "next";

import Seo from "@/components/Seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="moviexyz"
        description="discover random movies at the click of a button!"
        ogContent={`/default-card#wtf`}
      />
    </>
  );
};

export default Home;
