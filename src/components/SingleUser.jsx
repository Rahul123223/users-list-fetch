import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleUser = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await response.json();
      setProduct(data);
      console.log(data);

      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <h2>Loading.....</h2>
      </>
    );
  };

  const showProduct = () => {
    return <></>;
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <showProduct />}</div>
      </div>
    </div>
  );
};

export default SingleUser;
