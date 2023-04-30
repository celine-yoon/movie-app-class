import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Detail.css";

function Detail() {
  let { state } = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate("/");
    }
  }, [state, navigate]);

  const { title, year, poster, genres, summary } = state ?? {
    title: "Wrong Approach",
  };

  return (
    <div>
      <div className="detail_container">
        <div className="detail">
          <img src={poster} alt={title} title={title} />
          <div className="movie_data">
            <p className="movie_title">{title}</p>
            <p className="movie_year">{year}</p>
            <ul className="genres">
              {genres?.map((genre, index) => (
                <li key={index} className="genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie_summary">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
