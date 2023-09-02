function MoviesCard({ id, movieUrl, title, type, buttonLabel }) {
  return (
    <li className="movies__item">
      <img className="movies__image" src={movieUrl} alt={title}></img>
      <div className="movies__content">
        <h2 className="movies__title">{title}</h2>
        <button
          className={'movies__like movies__like_type_'+type}
          type="button"
          aria-label={buttonLabel}
        />
        <p className="movies__duration">1ч42м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
