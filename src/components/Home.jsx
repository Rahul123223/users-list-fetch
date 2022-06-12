import React from "react";
// import UsersList from "./UsersList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const showData = () => {
    navigate("/users");
  };
  return (
    <div>
      <button onClick={showData}>Get Users Data</button>
    </div>
  );
};

export default Home;
