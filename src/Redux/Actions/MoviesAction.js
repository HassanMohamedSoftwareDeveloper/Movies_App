import axios from "axios";
import {
  AllMOVIES,
  MOVIESBYPAGE,
  MovieApi,
  SearchMOVIES,
} from "../Types/MoviesType";

export const GetAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);

    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const GetMoviesByPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3a4fb3731a92abff784692d7ef68fbd1&language=ar&page=${page}`
    );

    dispatch({
      type: MOVIESBYPAGE,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const SearchMovies = (query) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=3a4fb3731a92abff784692d7ef68fbd1&language=ar&page=1&query=${query}`
    );

    //const res = await axios.get(MovieApi);

    dispatch({
      type: SearchMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
