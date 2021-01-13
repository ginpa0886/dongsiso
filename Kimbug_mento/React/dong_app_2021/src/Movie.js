import React from 'react';
import ProrpTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster }) {
  return (
    <div class="moves">
        <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title" style={{backgroundColor: "red"}}>{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>)
}

Movie.prorpTypes = {
  id: ProrpTypes.number.isRequired,
  year: ProrpTypes.number.isRequired,
  title: ProrpTypes.string.isRequired,
  summary: ProrpTypes.string.isRequired,
  poster: ProrpTypes.string.isRequired
};



export default Movie;