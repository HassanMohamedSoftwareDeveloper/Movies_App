import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ getByPage, totalPages }) => {
  const handlePageClick = (e) => {
    getByPage(e.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={totalPages}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      previousLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
