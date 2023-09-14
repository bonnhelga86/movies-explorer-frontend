import SearchForm from '../../Elements/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import { movieList } from '../../../utils/movieList';

function SavedMovies() {
const movies = movieList.filter(movie => movie.likes === 'likes');

  return (
    <>
      <SearchForm />
      <section className="movies saved-movies" aria-label="Секция с фильмами">
        <MoviesCardList
          movies={movies}
          type={'dislikes'}
          buttonLabel={'Удалить из списка'}
        />
      </section>
    </>
  );
}

export default SavedMovies;
