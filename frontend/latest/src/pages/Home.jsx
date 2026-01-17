import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setLoading(true); 
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

        fetch(`${apiUrl}/products?${searchParams}`)
            .then(res => res.json())
            .then(res => {
                // Only set products if the array exists in the response
                if (res.products && Array.isArray(res.products)) {
                    setProducts(res.products);
                } else {
                    setProducts(res);
                }
                setLoading(false); // Stop loading after data is received
            })
            .catch(err => {
                console.error("API Error:", err);
                setLoading(false); 
            });
    }, [searchParams]);

    return (
        <>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {loading ? (
                        // 1. Show this while the API is fetching
                        <div className="col-12 text-center mt-5">
                            <p>Loading products...</p>
                        </div>
                    ) : products && products.length > 0 ? (
                        // 2. Show this if products are found
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        // 3. Show this ONLY if loading is finished and array is empty
                        <div className="col-12 text-center mt-5">
                            <h4 className="text-muted">No Products Found</h4>
                            <p>Try searching for a different keyword.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Home;