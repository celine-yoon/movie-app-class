import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={`/movie/${id}`}
      state={{ id, year, title, summary, poster, genres }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <p className="movie_title">{title}</p>
          <p className="movie_year">{year}</p>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie_summary">{`${summary.slice(0, 160)}  ...`}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
