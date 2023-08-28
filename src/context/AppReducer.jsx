export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case 'MOVE_TO_WATCHED':
      const movieToMove = state.watchlist.find(
        (movie) => movie.id === action.payload
      );

      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
        watched: [...state.watched, movieToMove],
      };
    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
