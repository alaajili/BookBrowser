import React from "react";
import { PaginationControlsProps } from "../types";

const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center my-4">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">
        Previous
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
