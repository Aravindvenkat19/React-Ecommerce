import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import {useSearchParams} from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams()

  useEffect(()=>{
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

    fetch(`${apiUrl}/products?${searchParams}`)
    .then(res => res.json())
    .then(res => setProducts(res.products || res));
  },[searchParams]);

  return (
    <>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map(product => <ProductCard key={product._id} product={product} />)}
        </div>
      </section>
    </>
  );
};

export default Home;
