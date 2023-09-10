import movie from '../../../images/movie.jpg';

function MoviesCard({ title, likes, type, buttonLabel }) {
  const buttonClassList = type === 'likes'
    ? `movies__button_type_${likes}`
    : `movies__button_type_${type}`

  return (
    <li className="movies__item">
      <img className="movies__image" src={movie} alt={title} />
      <div className="movies__content">
        <div className="movies__title-wrap">
          <h2 className="movies__title">{title}</h2>
          <button
            className={`movies__button page__button ${buttonClassList}`}
            type="button"
            aria-label={buttonLabel}
          />
        </div>
        <p className="movies__duration">1ч 42м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
