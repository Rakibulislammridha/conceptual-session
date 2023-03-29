import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const Home = ({ handleWatchTime }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <div className="movie-container row">
        {movies.map((movie) => (
          <SingleCart
            handleWatchTime={handleWatchTime}
            movie={movie}
          ></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
