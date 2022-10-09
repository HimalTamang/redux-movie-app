import { createSlice } from "@reduxjs/toolkit";
// import MovieApi from "../../Common/Apis/MovieApi";
// import { APIKey } from "../../Common/Apis/ApiKey";

// initialState of the application
const initialState = {
  movie: {},
};

//creating slice including reducer
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
