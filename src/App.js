// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    const URL = "https://reqres.in/api/users?page=2";
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setList(data);
      console.log(data)
    } catch (err) {
      console.log("error", err);
    }
  };

  return <div className="App">
    
  </div>;
}

export default App;
