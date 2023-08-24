import React from "react";
import CardMovie from "./CardMovie";
import { Row } from "react-bootstrap";
import Pagination from "./Pagination";

const MovieList = ({ movies, getByPage, totalPages }) => {
  return (
    <div className="mt-3">
      <Row>
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <CardMovie key={movie.id} movie={movie} />;
          })
        ) : (
          <h2 className="text-center p-5">لا يوجد أفلام ...</h2>
        )}
        {totalPages > 1 ? (
          <Pagination getByPage={getByPage} totalPages={totalPages} />
        ) : null}
      </Row>
    </div>
  );
};

export default MovieList;
