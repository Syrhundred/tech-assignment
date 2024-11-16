'use client';

interface SortBarProps {
    sortOption: string;
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

const SortBar: React.FC<SortBarProps> = ({ sortOption, setSortOption }) => {
    return (
        <div className="mb-6">
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
                <option value="none">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="rating-desc">Rating: High to Low</option>
            </select>
        </div>
    );
};

export default SortBar;
