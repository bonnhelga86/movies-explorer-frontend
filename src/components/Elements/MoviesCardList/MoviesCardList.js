import MoviesCard from '../../Elements/MoviesCard/MoviesCard';

function MoviesCardList({ movies, type, buttonLabel }) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {movies.length > 0
          ? movies.map(movie => (
              <MoviesCard
                key={movie.title}
                id={movie.id}
                movieUrl={movie.url}
                title={movie.title}
                type={type}
                buttonLabel={buttonLabel}
              />
            ))
          : 'Ничего не нашлось'
        }
      </ul>
      {type==='likes' && <button className="movies__more">Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
