"use client";

import useProducts from "@/features/main/hooks/useProducts";
import SearchBar from "@/features/main/components/SearchBar";
import SortBar from "@/features/main/components/SortBar";
import ProductGrid from "@/features/main/components/ProductGrid";
import Pagination from "@/features/main/components/Pagination";
import CartSummary from "@/features/main/components/CartSummary";

const HomePage: React.FC = () => {
    const {
        searchQuery,
        setSearchQuery,
        sortOption,
        setSortOption,
        currentPage,
        setCurrentPage,
        paginatedItems: products,
        totalPages,
        loading,
        error,
        totalItems,
        totalPrice,
        addToCartHandler,
    } = useProducts(6);

    if (loading) return <div className="text-center mt-10">Loading products...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
                    Product Listings
                </h1>

                <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <SortBar sortOption={sortOption} setSortOption={setSortOption} />
                    <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
                </div>

                <ProductGrid products={products} addToCart={addToCartHandler} />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default HomePage;
