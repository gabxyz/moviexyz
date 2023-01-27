import Seo from "@/components/Seo";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Moviexyz"
        description="explore and discover random movies"
        ogContent={`/default-card`}
      />
    </>
  );
};

export default Home;
