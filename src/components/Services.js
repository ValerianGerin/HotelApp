import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState({
    services: [{ icon: <FaCocktail />, title: "free cocktails" }],
  });
  return (
    <div>
      <Title title="services" />
    </div>
  );
};

export default Services;
