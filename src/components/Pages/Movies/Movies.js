import SearchForm from '../../Sections/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

function Movies({ movies }) {
  return (
    <>
      <SearchForm />
      <section className="movies" aria-label="Секция с фильмами">
        <MoviesCardList
          movies={movies}
          type={'likes'}
          buttonLabel={'Лайкнуть'}
        />
      </section>
    </>
  );
}

export default Movies;
