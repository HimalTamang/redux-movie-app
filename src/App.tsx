import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/404Error/PageNotFound";

function App() {
  return (
    <>
      <div className="bg-[#151b20] ">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
