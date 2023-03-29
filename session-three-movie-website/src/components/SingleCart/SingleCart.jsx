import React from "react";

const SingleCart = ({ movie, handleWatchTime }) => {
  //   console.log(movie);
  return (
    <div className="movie-cart card text-center w-100 m-auto col-md-6">
      <div className="movie-poster w-25 m-auto">
        <img className="w-75" src={movie.poster} alt="" />
        <h6>{movie.movieName}</h6>
        <p>Description: {movie.description}</p>
        <div className="time-rating d-flex justify-content-around">
          <p>Watch Time: {movie.watchTime} min</p>
          <p>Rating: {movie.imdbRating}</p>
        </div>
        <button
          onClick={() => handleWatchTime(movie.watchTime)}
          className="btn btn-info w-75 m-auto"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleCart;
