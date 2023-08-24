import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import MovieList from "./Components/MovieList";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3a4fb3731a92abff784692d7ef68fbd1&language=ar&page=1"
    );

    setMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };

  const getByPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3a4fb3731a92abff784692d7ef68fbd1&language=ar&page=${page}`
    );

    setMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (query) => {
    if (query === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3a4fb3731a92abff784692d7ef68fbd1&language=ar&page=1&query=${query}`
      );
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    }
  };

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  getByPage={getByPage}
                  totalPages={totalPages}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
