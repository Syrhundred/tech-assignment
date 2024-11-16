interface CartSummaryProps {
    totalItems: number;
    totalPrice: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ totalItems, totalPrice }) => {
    return (
        <div className="my-6">
            <p className="text-gray-700">Total Items: {totalItems}</p>
            <p className="text-gray-700">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default CartSummary;
