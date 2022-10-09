import React from "react";

const MovieCard = (props: any) => {
  const { data } = props;
  // console.log(data);
  return (
    <div className="MovieCardWrapper font-sans bg-[#1e272e] rounded overflow-hidden cursor-pointer mx-1 my-2 transform transition duration-500 hover:scale-95 shadow-md hover:shadow-lg">
      <div className="card-inner">
        <div className="poster h-[250px] ">
          <img src={data.Poster} className="h-full w-full" alt={data.Title} />
        </div>
        <div className="movieTitle text-sm 3xl:text-md">
          <h3 className=" py-2">Title: {data.Title}</h3>
          <p className="pb-2">Release Date: {data.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
