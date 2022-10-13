import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMoviesOrSeries,
  getAsyncMoviesOrSeries,
  removeSelectedDetail,
} from "../../ReducerFeatute/Reducer/MovieSlice";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const dispatch = useDispatch();
  // get the stored state details
  const detail = useSelector(getAsyncMoviesOrSeries);
  console.log(detail);

  const { imdbID } = useParams();
  // console.log(imdbID);
  // dispatching an action to fetch the movie detail
  useEffect(() => {
    dispatch(fetchAsyncMoviesOrSeries(imdbID));
    return () => {
      dispatch(removeSelectedDetail());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="detailWrapper h-fit sm:[100vh] ">
      {Object.keys(detail).length === 0 ? (
        "Loading..."
      ) : (
        <div className="flex flex-col sm:flex-row py-1 px-4 sm:py-4 text-sans">
          <div className="left w-[100%] sm:w-[60%] order-2 sm:order-1 text-sm xl:text-lg space-y-2">
            <h1 className="font-bold text-lg">Details:</h1>
            <h2>
              <span className="font-semibold">Name: </span> {detail.Title}
            </h2>
            <p>
              <span className="font-semibold">Imdb Rating:</span>{" "}
              {detail.imdbRating}
            </p>
            <p>
              <span className="font-semibold">Released Date: </span>
              {detail.Released}
            </p>
            <p>
              <span className="font-semibold">Total Time: </span>
              {detail.Runtime}
            </p>
            <p>
              <span className="font-semibold">Genre: </span> {detail.Genre}
            </p>
            <p>
              <span className="font-semibold">Country: </span> {detail.Country}
            </p>
            <p>
              <span className="font-semibold">Language: </span>{" "}
              {detail.Language}
            </p>
            <p>
              <span className="font-semibold">Starring: </span> {detail.Actors}
            </p>
            <p>
              <span className="font-semibold">Awards: </span> {detail.Awards}
            </p>
            <p>
              <span className="font-semibold">Director: </span>
              {detail.Director}
            </p>
            <p>
              <span className="font-semibold">Box Office: </span>
              {detail.BoxOffice}
            </p>
            <p>
              <span className="font-semibold text-justify">Description: </span>
              {detail.Plot}
            </p>
          </div>
          <div className="right w-[100%] sm:w-[40%] order-1 sm:order-2">
            <img
              src={detail.Poster}
              alt={detail.Title}
              className="transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
