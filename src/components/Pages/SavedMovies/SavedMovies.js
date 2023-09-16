import React from 'react';
import SearchForm from '../../Elements/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Elements/Preloader/Preloader';
import { getMovies, deleteMovie } from '../../../utils/MainApi';

function SavedMovies() {
  const [movies, setMovies] = React.useState([]);
  const [isPreloader, setIsPreloader] = React.useState(false);

  React.useEffect(() => {
    setIsPreloader(true);
    getMovies()
    .then(moviesData => {
      setMovies(moviesData);
    })
    .catch(() => {
      console.error(`Во время запроса произошла ошибка. Возможно, проблема с соединением
                      или сервер недоступен. Подождите немного и попробуйте ещё раз.`
      );
    })
    .finally(() => {
      setIsPreloader(false);
    });
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
              />
        }
      </section>
    </>
  );
}

export default SavedMovies;
