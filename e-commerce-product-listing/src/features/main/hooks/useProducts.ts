import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { fetchProducts } from "@/store/slices/productsSlice";
import { addToCart } from "@/store/slices/cartSlice";
import { paginate } from "@/features/main/services/paginationUtils";
import {Product} from "@/types/product";



const useProducts = (itemsPerPage: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const { items: products, loading, error } = useSelector((state: RootState) => state.products);
    const cart = useSelector((state: RootState) => state.cart.items);

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortOption, setSortOption] = useState<string>("none");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

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

    const { paginatedItems, totalPages } = paginate(filteredProducts, currentPage, itemsPerPage);

    const addToCartHandler = (product: Product) => {
        dispatch(addToCart(product));
    };

    return {
        searchQuery,
        setSearchQuery,
        sortOption,
        setSortOption,
        currentPage,
        setCurrentPage,
        paginatedItems,
        totalPages,
        loading,
        error,
        cart,
        totalItems,
        totalPrice,
        addToCartHandler,
    };
};

export default useProducts;
