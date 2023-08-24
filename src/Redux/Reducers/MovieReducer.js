import { AllMOVIES, MOVIESBYPAGE, SearchMOVIES } from "../Types/MoviesType";

const initialValue = { Movies: [], PageCount: 0 };

export const MovieReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { Movies: action.data, PageCount: action.pages };
      case MOVIESBYPAGE:
      return { Movies: action.data, PageCount: action.pages };
    case SearchMOVIES:
      return { Movies: action.data, PageCount: action.pages };
    default:
      return state;
  }
};
