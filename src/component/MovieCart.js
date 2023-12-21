import React, { useState, useEffect } from "react";
import "./MovieCart.css";

const MovieCart = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const defaultSearchTerm = "Avengers";
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=50d5e3c6&s=${searchTerm || defaultSearchTerm}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
       console.log(data);
        if (data.Response === "False") {
          setSearchError(true);
          setMovies([]);
        } else {
          setSearchError(false);
          setMovies(data.Search || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMovies();
  }, [searchTerm, defaultSearchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="center">Movie List</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
        className="main"
        autoFocus
      />
      {searchError && <p className="no-image">No movies found....</p>}
      <ul className="one">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="two">
            {movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="image"
              />
            ) : (
              <p className="no-image">No poster available</p>
            )}
            <h2 className="title">{movie.Title}</h2>
            <p className="text">{movie.Type}</p>
            <p className="text">{movie.Year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCart;