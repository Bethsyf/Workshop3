import React from "react";
import Add from "../components/Add";
import List from "../components/List";
import FooterP from "../components/Footer"

const Home = () => {
  return (
    <>
      <div>
        <Add/>
        <List/>
        <FooterP/>
      </div>
    </>
  );
}

export default Home;
