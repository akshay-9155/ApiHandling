import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // Using customReactQuery
  // const [products, error, loading] = customReactQuery("http://localhost:3000/api/products");

  // Another way -
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = async (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3000/api/products");
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.log("Error fetching data: ", error);
    //   }
    // }
    // fetchData();

    // OR using IIFE

    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/products");
        console.log(response);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log("Error fetching data: ", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:3000/api/products?search=${searchValue}`
      );
      if(!Array.isArray(response.data)){
        setFilteredProducts([])
      }else{
        setFilteredProducts(response.data);
      }
    })();
  }, [searchValue]);

  // We can use this or we can use conditional rendering
  // if (error) {
  //   return <h1>Something went wrong!</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading ...</h1>;
  // }

  return (
    <div className="main">
      <input
        className="search-input"
        onChange={handleChange}
        type="text"
        placeholder="Enter product to search..."
        value={searchValue}
      />
      <h1 className="main-heading">Learning API Handling</h1>
      {error ? (
        <h2 className="error-message">Something went wrong</h2>
      ) : loading ? (
        <h2 className="loading-message">Loading...</h2>
      ) : (
        <>
          <h2 className="product-count">
            Number of products = {products.length}
          </h2>
          <h2 className="filtered-product-count">
            Number of Filtered products = {filteredProducts.length}
          </h2>
          <ul className="product-list">
            {filteredProducts.map((product, index) => {
              return (
                <div className="product-item" key={index}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="product-details">
                    <li className="product-name">{product.name}</li>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;

// Creating customReactQuery

const customReactQuery = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3000/api/products");
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.log("Error fetching data: ", error);
    //   }
    // }
    // fetchData();

    // OR using IIFE

    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(url);
        setLoading(false);
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        setError(true);
        console.log("Error fetching data: ", error);
      }
    })();
  }, []);

  return [products, error, loading];
};
