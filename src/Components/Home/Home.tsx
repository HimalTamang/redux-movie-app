import { useEffect } from "react";
import MovieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/ApiKey";
import { addMovies } from "../../ReducerFeatute/Reducer/MovieSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import MovieListing from "../MovieListing/MovieListing";

//arrow function
const Home = () => {
  const dispatch = useDispatch();

  // useeffect
  useEffect(() => {
    // apicall
    const MovieText = "Harry";

    const MovieApiFetch = async () => {
      const res: any = await MovieApi.get(
        `?apikey=${APIKey}&s=${MovieText}&type=movie`
      ).catch((err: any) => console.log("error:", err));

      // console.log(res.data);
      dispatch(addMovies(res.data));
    };

    MovieApiFetch();
  }, [dispatch]);

  // Home return statement
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
