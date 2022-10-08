import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Reducer/MovieSlice";
// import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
