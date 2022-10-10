import { useEffect } from "react";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../ReducerFeatute/Reducer/MovieSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import MovieListing from "../MovieListing/MovieListing";

//arrow function
const Home = () => {
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  // Home return statement
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
