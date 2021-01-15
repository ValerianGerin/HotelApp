import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms strating at 299€">
        <Link to="/rooms" className="btn-primary">our rooms</Link>
      </Banner>
    </Hero>
  );
};

export default Home;
