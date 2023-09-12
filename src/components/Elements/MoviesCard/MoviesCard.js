import React from "react";
import { Link } from "react-router-dom";

function MoviesCard({ title, url, trailerLink, duration, likes, type, buttonLabel }) {
  const [movieDuration, setMovieDuration] = React.useState({});
  const buttonClassList = type === 'likes'
    ? `movies__button_type_${likes}`
    : `movies__button_type_${type}`;


  React.useEffect(() => {
    const hour = Math.floor(duration/60);
    const minute = (duration - hour*60);
    setMovieDuration({hour, minute});
  }, []);

  return (
    <li className="movies__item">
      <Link to={trailerLink} className="movies__link page__link" target="_blank">
        <img className="movies__image" src={`https://api.nomoreparties.co${url}`} alt={title} />
      </Link>
      <div className="movies__content">
        <div className="movies__title-wrap">
          <h2 className="movies__title">{title}</h2>
          <button
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
