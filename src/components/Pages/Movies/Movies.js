import SearchForm from '../../Sections/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import { movieList } from '../../../utils/movieList'

function Movies({ movies }) {
  return (
    <>
      <SearchForm />
      <section className="movies" aria-label="Секция с фильмами">
        <MoviesCardList
          movies={movieList}
          type={'likes'}
          buttonLabel={'Лайкнуть'}
        />
      </section>
    </>
  );
}

export default Movies;
