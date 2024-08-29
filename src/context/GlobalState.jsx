import React, { createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';

// Initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state.watchlist, state.watched]);

  // Actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const removeMovieFromWatchlist = (movieId) => {
    dispatch({
      type: 'REMOVE_FROM_WATCHLIST',
      payload: movieId,
    });
  };

  const moveMovieToWatched = (movieId) => {
    dispatch({ type: 'MOVE_TO_WATCHED', payload: movieId });
  };

  const removeMovieFromWatched = (movieId) => {
    dispatch({ type: 'REMOVE_FROM_WATCHED', payload: movieId });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        moveMovieToWatched,
        removeMovieFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
