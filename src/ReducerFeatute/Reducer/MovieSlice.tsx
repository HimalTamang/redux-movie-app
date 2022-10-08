import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movie = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: { movies: { movie: any } }) =>
  state.movies.movie;
export default movieSlice.reducer;
