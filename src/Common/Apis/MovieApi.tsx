import React from "react";
import axios from "axios";

// const MovieApi = () => {
//   return <div>MovieApi</div>;
// };

export default axios.create({
  baseURL: "http://www.omdbapi.com/",
});
