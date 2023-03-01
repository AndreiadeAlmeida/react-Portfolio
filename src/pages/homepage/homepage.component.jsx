import React from "react";
import About from "../../components/about/about.component";
import Header from "../../components/header/header.component";
import Work from "../../components/work/work.components";
import Navigation from "../../routes/navigation/navigation.component";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Work />
    </>
  );
};

export default Home;
