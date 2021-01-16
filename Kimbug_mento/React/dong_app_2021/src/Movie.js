import React from 'react';
import ProrpTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres }) {
  return (
    <div className="moves">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">{genre}</li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>)
}

Movie.prorpTypes = {
  id: ProrpTypes.number.isRequired,
  year: ProrpTypes.number.isRequired,
  title: ProrpTypes.string.isRequired,
  summary: ProrpTypes.string.isRequired,
  poster: ProrpTypes.string.isRequired,
  genres: ProrpTypes.arrayOf(ProrpTypes.string).isRequired
};



export default Movie;