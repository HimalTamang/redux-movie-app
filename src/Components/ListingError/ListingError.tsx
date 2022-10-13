import React from "react";

const ListingError = () => {
  return (
    <div className=" w-[400px] h-[50vh]flex flex-col justify-center">
      <h1>Opps !</h1>
      <p>There is no items for this search term. Please try again !</p>
    </div>
  );
};

export default ListingError;
