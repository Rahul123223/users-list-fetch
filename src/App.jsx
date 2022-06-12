import React from 'react'
import {UsersList} from './components/UsersList'
import {Routes,Route} from "react-router-dom"
import SingleUser from './components/SingleUser'
import Home from "./components/Home"
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/users" element={<UsersList />} />
        <Route exact path="/users:id" element={<SingleUser/>} />
      </Routes>
      {/* <UsersList/> */}
    </div>
  )
}

export default App