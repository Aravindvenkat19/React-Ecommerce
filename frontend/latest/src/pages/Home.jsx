import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const apiUrl =
      import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

    fetch(`${apiUrl}/products?${searchParams}`).then((res) => res.json());
    then((res) => {
      // Only set products if the array exists in the response
      if (res.products && Array.isArray(res.products)) {
        setProducts(res.products);
      } else {
        // Fallback for different API response structures
        setProducts(res);
      }
    });
  }, [searchParams]);

  return (
    <>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>Loading products... (Check Console if this stays for long)</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
