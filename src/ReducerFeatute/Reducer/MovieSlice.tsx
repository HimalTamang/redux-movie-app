import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/ApiKey";

// async thunk middleware use for fetching movie api and dispatching an actions
export const fetchAsyncMovies: any = createAsyncThunk(
  "omdb/fetchAsyncMovies",
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
  "omdb/fetchAsyncSeries",
  async () => {
    const MovieText = "Friends";
    const res: any = await MovieApi.get(
      `?apikey=${APIKey}&s=${MovieText}&type=series`
    );
    // console.log(res.data);
    return res.data;
  }
);

//async thunk middleware for getching each detail of the movie based on their imdbID
export const fetchAsyncMoviesOrSeries: any = createAsyncThunk(
  "omdb/detail",
  async (id) => {
    const res = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return res.data;
  }
);

// initialState of the application
const initialState = {
  movie: {},
  series: {},
  movieOrSeriesDetail: {},
};

//creating slice including reducer
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedDetail: (state) => {
      state.movieOrSeriesDetail = {};
    },
  },

  // extrareducer
  extraReducers: {
    //for movies
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
    //for series
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully!");
      return { ...state, series: payload };
    },
    // for detailpage
    [fetchAsyncMoviesOrSeries.fulfilled]: (state, { payload }) => {
      console.log("detail fetched");
      return { ...state, movieOrSeriesDetail: payload };
    },
  },
});

export const { removeSelectedDetail } = movieSlice.actions;
export const getAllMovies = (state: any) => state.movies.movie;
export const getAllSeries = (state: any) => state.movies.series;
export const getAsyncMoviesOrSeries = (state: any) =>
  state.movies.movieOrSeriesDetail;
export default movieSlice.reducer;
