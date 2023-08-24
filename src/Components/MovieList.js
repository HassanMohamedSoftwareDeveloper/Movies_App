import React, { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import { Row } from "react-bootstrap";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { GetAllMovies } from "../Redux/Actions/MoviesAction";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllMovies());
  }, []);

  const moviesData = useSelector((state) => state.Movies);

  useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

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
      </Row>
      <Row>
        <Pagination />
      </Row>
    </div>
  );
};

export default MovieList;
