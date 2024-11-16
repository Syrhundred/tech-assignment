'use client';
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const DebugComponent = () => {
    const products = useSelector((state: RootState) => state.products.items);

    return (
        <div>
            <h2>Debug Products:</h2>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    );
};

export default DebugComponent;
