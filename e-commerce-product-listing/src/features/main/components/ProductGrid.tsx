import React from "react";
import ProductCard from "@/features/main/components/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="max-w-xs mx-auto">
                    <ProductCard product={product} addToCart={() => addToCart(product)} />
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
