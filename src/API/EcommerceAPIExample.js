import React, { useEffect, useState } from "react";

function EcommerceAPIExample() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
  }, []);
  return (
    <div>
      {products?.map((val, key) => (
        <div id={key}>
          <img src={val.thumbnail} alt="thumbnail" />
          <p>Title: {val.title}</p>
          <p>Rating: {val.rating}</p>
          <p>Brand: {val.brand}</p>
          <p>Price: {val.price}</p>
        </div>
      ))}
    </div>
  );
}

export default EcommerceAPIExample;
