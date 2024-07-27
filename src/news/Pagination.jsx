import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Pagination = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(location.search);
    params.set("page", newPage);
    navigate(`/?${params.toString()}`);
    window.scrollTo(0, 0);
  };

  const getPageNumbers = () => {
    let pages = [];
    let startPage, endPage;

    if (totalPages <= 5) {
      // Show all pages if there are 5 or fewer pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // Calculate start and end page based on current page
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination d-flex justify-content-center my-4">
      <div className="bg-white">
        {currentPage > 4 && (
          <button
            onClick={() => handlePageChange(1)}
            className="btn btn-outline-primary rounded-0 rounded-start  "
          >
            1
          </button>
        )}
        {currentPage > 5 && (
          <span className="btn btn-outline-primary rounded-0 border-start-0 ">
            ...
          </span>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`btn rounded-0   ${
              page == 1 ? "rounded-start" : "border-start-0"
            } ${
              currentPage === page
                ? "btn-primary text-white"
                : "btn-outline-primary"
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages - 4 && (
          <span className="btn disabled btn-outline-primary border-start-0 rounded-0">
            ...
          </span>
        )}
        {currentPage < totalPages - 3 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className="btn  btn-outline-primary border-start-0 rounded-0 rounded-end"
          >
            {totalPages}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
