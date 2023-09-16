import React from 'react';
import SearchForm from '../../Elements/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Elements/Preloader/Preloader';
import { getLikesMovies, deleteLikesMovie } from '../../../utils/apiHelpers';

function SavedMovies() {
  const [movies, setMovies] = React.useState([]);
  const [isPreloader, setIsPreloader] = React.useState(false);

  function handleDeleteMovie(movie) {
    deleteLikesMovie(movie._id, setMovies);
  }

  React.useEffect(() => {
    setIsPreloader(true);
    getLikesMovies(setMovies);
    setIsPreloader(false);
  }, []);

  return (
    <>
      <SearchForm />
      <section className="movies saved-movies" aria-label="Секция с сохраненными фильмами">
        {isPreloader
          ? <Preloader />
          : (movies.length === 0)
            ? <p className="movies__query">Ничего не найдено</p>
            : <MoviesCardList
                movies={movies}
                type={'dislikes'}
                buttonLabel={'Удалить из списка'}
                handleLikesMovie={handleDeleteMovie}
              />
        }
      </section>
    </>
  );
}

export default SavedMovies;
