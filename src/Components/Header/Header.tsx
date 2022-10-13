import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../ReducerFeatute/Reducer/MovieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
  };
  return (
    <div className="navWrapper  px-6 h-[80px] w-full  text-2xl flex items-center  bg-[#1e272e] text-[#fff]">
      <nav className="w-full max-w-screen-xl mx-auto">
        <header className="  h-[50px] flex justify-between items-center ">
          <a href="/">Movie Clone App</a>
          <div className="border">
            <form
              onSubmit={handleOnSubmit}
              className=" flex items-center h-[35px] relative "
            >
              <input
                type="text"
                value={term}
                className="text-black text-sm h-full w-[200px] md:w-[400px] lg:w[500px] border-none hover:outline-none focus:outline-none"
                placeholder="Search"
                onChange={(e) => setTerm(e.target.value)}
              />
              <button
                type="submit"
                className="border h-[35px] w-[35px] px-2 flex items-center justify-center rounded-full absolute z-10 right-0 bg-[#151b20]"
              >
                <BiSearchAlt2 />
              </button>
            </form>
          </div>
          <span className="sm:flex hidden">Menu</span>
        </header>
      </nav>
    </div>
  );
};

export default Header;
