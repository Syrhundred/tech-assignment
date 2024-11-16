interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 border rounded-md ${
                    currentPage === 1
                        ? "text-gray-400 border-gray-300 cursor-not-allowed"
                        : "text-blue-500 border-blue-300 hover:bg-blue-100"
                }`}
            >
                Previous
            </button>
            <span className="px-4 py-2 mx-1 text-gray-700">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-1 border rounded-md ${
                    currentPage === totalPages
                        ? "text-gray-400 border-gray-300 cursor-not-allowed"
                        : "text-blue-500 border-blue-300 hover:bg-blue-100"
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
