import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { GetMoviesByPage } from "../Redux/Actions/MoviesAction";

const Pagination = () => {
  const [totalPages, setTotalPages] = useState(0);
  const pageCount = useSelector((state) => state.PageCount);
  const dispatch = useDispatch();

  const handlePageClick = (e) => {
    dispatch(GetMoviesByPage(e.selected + 1));
  };

  useEffect(() => {
    setTotalPages(pageCount);
  }, [pageCount]);

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
