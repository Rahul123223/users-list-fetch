// import "./App.css";
// import UserData from "./components/UserData";
import { Route, Routes } from "react-router-dom";
import SingleUser from "./components/SingleUser";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UsersList />}></Route>
        <Route path="/users/:id" element={<SingleUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;