import React from "react";
import List from "../components/List";
import FooterP from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <List/>
        <FooterP/>
      </div>
    </>
  );
}

export default Home;
