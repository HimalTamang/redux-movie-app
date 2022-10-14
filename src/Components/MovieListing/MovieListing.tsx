// import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllSeries,
} from "../../ReducerFeatute/Reducer/MovieSlice";
import MovieCard from "../Cards/MovieCard";
import ListingError from "../ListingError/ListingError";

const MovieListing = () => {
  const allMovies = useSelector(getAllMovies);
  const allSeries = useSelector(getAllSeries);

  let renderedMovie,
    renderedSeries = "";

  // movie
  renderedMovie =
    allMovies.Response === "True" ? (
      allMovies.Search.map((movie: any, index: any) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <ListingError />
    );

  // for series
  // movie
  renderedSeries =
    allSeries.Response === "True" ? (
      allSeries.Search.map((show: any, index: any) => {
        // console.log(index);
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <ListingError />
    );

  //next
  return (
    <div className="movieWrapper  font-sans px-6 bg-[#151b20] text-[#e9f6ff]">
      <div className="movieListing  mx-auto max-w-screen-2xl ">
        <h2 className="text-xl font-semibold py-4">Lists of Movie : </h2>
        <div className="movieContainer  grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 2xl:grid-cols-8 overflow-hidden">
          {renderedMovie}
        </div>
        <div className="seriesListing">
          <h2 className="text-xl font-semibold py-4">Lists of Series: </h2>
          <div className="seriesContainer grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 2xl:grid-cols-8 overflow-hidden">
            {renderedSeries}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
