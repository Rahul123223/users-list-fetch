// import logo from "./logo.svg";
import { useEffect, useState } from "react";
// import "./App.css";
import "../styles.css"

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const URL = "https://reqres.in/api/users?page=2";
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setList(data.data);
      console.log(data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="App">
      <div className="flex">
        {list.map((e, i) => (
            <div key={i}>
              <p>
                <strong>{e.first_name}</strong>
              </p>
              <p>{e.email}</p>
              <img key={e.avatar} src={e.avatar} />
              <p>
               <button>{e.id}</button> 
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
