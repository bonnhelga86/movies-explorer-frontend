import React from "react";
import { Link } from "react-router-dom";

function MoviesCard({ movie, likes, type, buttonLabel, handleLikesMovie }) {
  const [movieDuration, setMovieDuration] = React.useState({});
  const buttonClassList = type === 'likes'
    ? `movies__button_type_${likes}`
    : `movies__button_type_${type}`;

  React.useEffect(() => {
    const hour = Math.floor(movie.duration/60);
    const minute = (movie.duration - hour*60);
    setMovieDuration({hour, minute});
  }, []);

  return (
    <li className="movies__item">
      <Link to={movie.trailerLink} className="movies__link page__link" target="_blank">
        <img
          className="movies__image"
          src={movie.image}
          alt={movie.nameRU}
        />
      </Link>
      <div className="movies__content">
        <div className="movies__title-wrap">
          <h2 className="movies__title">{movie.nameRU}</h2>
          <button
            onClick={() => handleLikesMovie(movie)}
            className={`movies__button page__button ${buttonClassList}`}
            type="button"
            aria-label={buttonLabel}
          />
        </div>
        <p className="movies__duration">{`${movieDuration.hour}ч ${movieDuration.minute}м`}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
