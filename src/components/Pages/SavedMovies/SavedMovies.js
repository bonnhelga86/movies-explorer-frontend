import React, { useRef } from 'react';
import SearchForm from '../../Elements/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Elements/Preloader/Preloader';
import { getFilterMoviesList } from '../../../utils/helpers';
import { useMainApi } from '../../../hooks/useMainApi';

function SavedMovies() {
  const formSavedMoviesRef = useRef();

  const [movies, setMovies] = React.useState([]);
  const [searchMovies, setSearchMovies] = React.useState([]);

  const [initialSearchQuery, setInitialSearchQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [initialIsShort, setInitialIsShort] = React.useState(false);
  const [isShort, setIsShort] = React.useState(false);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [userErrorResponse, setUserErrorResponse] = React.useState('');
  const [isFormError, setIsFormError] = React.useState(false);

  const { getLikesMovies, deleteLikesMovie } = useMainApi();

  function handleDeleteMovie(movie) {
    deleteLikesMovie(movie._id, setMovies, setUserErrorResponse);
  }

  function handleFilterMovies() {
    const filterMovies = getFilterMoviesList(movies, searchQuery, isShort);
    setSearchMovies(filterMovies);
  }

  React.useEffect(() => {
    setIsPreloader(true);
    getLikesMovies(setMovies, setUserErrorResponse);
    setIsPreloader(false);
  }, []);

  React.useEffect(() => {
    if (movies.length > 0 && searchQuery) {
      handleFilterMovies();
    } else {
      setSearchMovies(movies);
    }
  }, [movies]);

  React.useEffect(() => {
    if(searchQuery && (searchQuery !== initialSearchQuery || isShort !== initialIsShort)) {
      formSavedMoviesRef.current.classList.add('form_disabled');

      setIsPreloader(true);
      handleFilterMovies();

      formSavedMoviesRef.current.classList.remove('form_disabled');
      setInitialSearchQuery(searchQuery);
      setInitialIsShort(isShort);
      setIsSubmitted(false);
      setIsPreloader(false);
    } else {
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <>
      <SearchForm
        movies={movies}
        typeMoviesPage={'saved-movies'}
        initialSearchQuery={initialSearchQuery}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isShort={isShort}
        setIsShort={setIsShort}
        setIsSubmitted={setIsSubmitted}
        isFormError={isFormError}
        setIsFormError={setIsFormError}
        formRef={formSavedMoviesRef}
      />
      <section className="movies saved-movies" aria-label="Секция с сохраненными фильмами">
        {isPreloader
          ? <Preloader />
          : (searchMovies.length === 0)
            ? <p className="movies__query">
                {(userErrorResponse) ? userErrorResponse : 'Ничего не найдено'}
              </p>
            : <MoviesCardList
                movies={searchMovies}
                typeMoviesPage={'saved-movies'}
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
