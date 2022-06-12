import logo from "./logo.svg";
// import './App.css';
import UsersList from "./components/UsersList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<UsersList></UsersList>}></Route>
      </Routes>
      {/* <UsersList></UsersList> */}
    </div>
  );
}

export default App;
