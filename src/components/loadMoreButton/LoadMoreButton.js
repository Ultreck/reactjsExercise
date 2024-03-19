import React, { useEffect, useState } from "react";

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit-10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProduct((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (product && product?.length === 100) {
      setDisabledButton(true);
    }
  }, [product]);

  if (loading) {
    return <div className="text">Loading data ! Please wait</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="text grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2">
        {product &&
          product?.length > 0 &&
          product?.map((item) => (
            <div className="text p-5 border flex flex-col m-1" key={item.id}>
              <img src={item?.thumbnail} alt={item?.title} className="text" />
              <p className="text">{item?.title}</p>
            </div>
          ))}
      </div>
      <div className="text">
        <button
          disabled={disabledButton}
          onClick={() => setCount(count + 1)}
          className="text">
          Load More Products
        </button>
        {disabledButton &&  <p className="text">You have reach the end of the list </p>}
      </div>
    </div>
  );
};

export default LoadMoreButton;
