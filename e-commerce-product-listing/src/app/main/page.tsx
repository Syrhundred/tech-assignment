"use client";

import React, {useState, useEffect} from "react";
import SearchBar from "@/features/main/components/SearchBar";
import SortBar from "@/features/main/components/SortBar";
import ProductCard from "@/features/main/components/ProductCard";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
}

const HomePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortOption, setSortOption] = useState<string>("none");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://my-json-server.typicode.com/Syrhundred/db/products");
                const data: Product[] = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products
        .filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === "price-asc") return a.price - b.price;
            if (sortOption === "price-desc") return b.price - a.price;
            if (sortOption === "rating-asc") return a.rating - b.rating;
            if (sortOption === "rating-desc") return b.rating - a.rating;
            return 0;
        });

    if (loading) {
        return <div className="text-center mt-10">Loading products...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Product Listings</h1>

                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                <SortBar sortOption={sortOption} setSortOption={setSortOption}/>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center text-gray-500 mt-6">
                        No products match your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
