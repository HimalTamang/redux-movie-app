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
    <div className="detailWrapper h-[100vh] ">
      {Object.keys(detail).length === 0 ? (
        "Loading..."
      ) : (
        <div className="flex">
          <div className="left w-[60%]">
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
              <span className="font-semibold">Description: </span>
              {detail.Plot}
            </p>
          </div>
          <div className="right">
            <img src={detail.Poster} alt={detail.Title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
