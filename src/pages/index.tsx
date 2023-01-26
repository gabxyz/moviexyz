import Seo from "@/components/Seo";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import { type NextPage } from "next";

const Home: NextPage = () => {
  const { letterCase } = useLetterCaseState();
  const pageTitle = letterCase === "lowercase" ? "moviexyz" : "Moviexyz";
  const pageDescription =
    letterCase === "lowercase"
      ? "explore and discover random movies"
      : "Explore and discover random movies";
  return (
    <>
      <Seo title={pageTitle} description={pageDescription} />
    </>
  );
};

export default Home;
