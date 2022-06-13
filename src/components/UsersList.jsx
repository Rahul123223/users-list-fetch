import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData, userError, userLoading } from "../Redux/action";
import "./UserData.css";


export default function UsersList() {
  const { user } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);

  const handlePage = () => {
    setPage(page + 1);
  };

  const handlePag2 = () => {
    setPage(page - 1);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLoading());
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => dispatch(userData(res.data)))
      .catch((error) => dispatch(userError()));
  }, [page]);

  // console.log(user);
  return (
    <>
      <div className="cards">
        {user.map((item) => {
          return (
            <div key={item.id} className="card-container">
              <img src={item.avatar} alt="Profile" />
              <div style={{ marginBottom: "6px" }}>
                {item.first_name} {item.last_name}
              </div>

              <Link
                to={`/users/${item.id}`}
                style={{
                  border: "1px solid black",
                  textDecoration: "none",
                  padding: "2px 3px",
                  borderRadius: "5px",
                  color: "black",
                  // backgroundColor:"cadetblue",
                  width:"40px",
                  transition: "0.6s;",
                  transform: "scale(1.2)",
                }}
              >
                {item.id}
              </Link>
            </div>
          );
        })}
      </div>
      <div id="pagi_btn">
        <button onClick={handlePag2} className="pagination">
          Previous
        </button>
        <button onClick={handlePage} className="pagination">
          Next
        </button>
      </div>
    </>
  );
}
