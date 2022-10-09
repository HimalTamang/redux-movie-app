// import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../ReducerFeatute/Reducer/MovieSlice";
import MovieCard from "../Cards/MovieCard";

const MovieListing = () => {
  const allMovies = useSelector(getAllMovies);
  // console.log(allMovies);

  let renderedMovie =
    allMovies.Response === "True"
      ? allMovies.Search.map((movie: any, index: any) => {
          // console.log(index);
          return <MovieCard key={index} data={movie} />;
        })
      : "Error in redering movie";
  return (
    <div className="movieWrapper font-sans px-6 bg-[#151b20] text-[#e9f6ff]">
      <div className="movieListing">
        <h2 className="text-xl font-semibold py-4">Lists of Movie : </h2>
        <div className="movieContainer grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 2xl:grid-cols-8 overflow-hidden">
          {renderedMovie}
        </div>
        <div className="seriesListing">
          <h2 className="text-xl font-semibold py-4">Lists of Series: </h2>
        </div>
        <div className="dramaListing">
          <h2 className="text-xl font-semibold py-4">Lists of Drama: </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
