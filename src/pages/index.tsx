import { type NextPage } from "next";
import Seo from "@/components/Seo";

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
