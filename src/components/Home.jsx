import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/home.css"
const Home = () => {
  const navigate = useNavigate();

  const fetchData = () => {
    navigate("/users");
  };
  return (
    <div id="btn" >
      <button  onClick={fetchData}>GET DATA</button>
    </div>
  );
};

export default Home;
