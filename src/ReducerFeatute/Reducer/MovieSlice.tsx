import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/ApiKey";

// async thunk middleware use for fetching movie api and dispatching an actions
export const fetchAsyncMovies: any = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const MovieText = "Harry";
    const res: any = await MovieApi.get(
      `?apikey=${APIKey}&s=${MovieText}&type=movie`
    );
    // console.log(res.data);
    return res.data;
  }
);

// async thunk middleware use for fetching series api and dispatching an actions
export const fetchAsyncSeries: any = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const MovieText = "Harry";
    const res: any = await MovieApi.get(
      `?apikey=${APIKey}&s=${MovieText}&type=movie`
    );
    // console.log(res.data);
    return res.data;
  }
);

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
  // extrareducer
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully!");
      return { ...state, movie: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: { movies: { movie: any } }) =>
  state.movies.movie;
export default movieSlice.reducer;
