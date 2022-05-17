import React from "react";
import Carousel from "../components/Carousel";
import Categories from "./Categories";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="">
        <Carousel />
        <div className="container my-3">
          <form>
            <input type="search" className="form-control" placeholder="Search" />
          </form>
        </div>
        <Categories />
      </div>
    </section>
  )
}

export default Hero;
