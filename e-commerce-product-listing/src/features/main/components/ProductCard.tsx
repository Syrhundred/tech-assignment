import React from "react";
import { Product } from "@/types/product";
import Image from 'next/image';
interface ProductCardProps {
    product: Product;
    addToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    return (
        <div className="bg-white rounded-md shadow hover:shadow-lg transition-shadow border border-gray-200 p-3 flex flex-col">
            <div className="w-full h-40 overflow-hidden rounded-md bg-gray-100">
                <Image
                    width={200}
                    height={200}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-3 flex-1">
                <h3 className="text-md font-medium text-gray-900 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {product.description}
                </p>
                <p className="text-md font-semibold text-gray-800 mt-2">
                    ${product.price.toFixed(2)}
                </p>
            </div>

            <button
                onClick={addToCart}
                className="mt-3 bg-blue-500 text-white px-3 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
