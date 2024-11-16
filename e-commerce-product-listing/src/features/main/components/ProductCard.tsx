import React from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-2">
                    {product.description.slice(0, 100)}...
                </p>
                <div className="mt-3 flex items-center justify-between">
                    <p className="font-semibold text-gray-900">
                        {product.price}
                    </p>
                    <p className="text-yellow-500">
                        {product.rating}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
