'use client';

export interface PaginatedData<T> {
    paginatedItems: T[];
    totalPages: number;
}

export const paginate = <T>(items: T[], currentPage: number, itemsPerPage: number): PaginatedData<T> => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return { paginatedItems, totalPages };
};
