import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../ReducerFeatute/Reducer/MovieSlice";

const MovieListing = () => {
  const allMovies = useSelector(getAllMovies);
  console.log(allMovies);
  return <div>MovieListing</div>;
};

export default MovieListing;
