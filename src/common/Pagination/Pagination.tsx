import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="mt-4 flex justify-end space-x-2">
      {Array.from({ length: totalPages }, (_, number) => (
        <button
          key={number + 1}
          onClick={() => onPageChange(number + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === number + 1 ? 'bg-[#5C148C] text-white' : 'bg-gray-200'
          }`}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
