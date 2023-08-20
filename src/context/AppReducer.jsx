export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'LOAD_FROM_LOCAL_STORAGE':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
