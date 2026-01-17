import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const apiUrl =
      import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

    fetch(`${apiUrl}/products?${searchParams}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.products && Array.isArray(res.products)) {
          setProducts(res.products);
        } else {
          setProducts(res);
        }
      })
      .catch((err) => console.error("API Error:", err));
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
          ) : Array.isArray(products) && products.length === 0 ? (
            // This part only shows if the API finished and found 0 products
            <div className="col-12 text-center mt-5">
              <h4 className="text-muted">No Products Found</h4>
              <p>Try searching for a different keyword.</p>
            </div>
          ) : (
            // This part shows while the API is still fetching
            <p>Loading products...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
