import React from 'react';
import SearchForm from '../../Elements/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Elements/Preloader/Preloader';
import { getFilterMoviesList } from '../../../utils/helpers';
import { useMainApi } from '../../../hooks/useMainApi';

function SavedMovies() {
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
    deleteLikesMovie(movie._id, setMovies);
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
    if(movies.length > 0) {
      if (searchQuery) {
        handleFilterMovies();
      } else {
        setSearchMovies(movies);
      }
    }
  }, [movies]);

  // React.useEffect(() => {
  //   if (searchQuery) {
  //     setIsSubmitted(true);
  //     setIsFormError(false);
  //   } else {
  //     setIsFormError(true);
  //   }
  // }, [isShort]);

  React.useEffect(() => {
    if(searchQuery && (searchQuery !== initialSearchQuery || isShort !== initialIsShort)) {
      setIsPreloader(true);
      setInitialSearchQuery(searchQuery);
      setInitialIsShort(isShort);
      handleFilterMovies();
      setIsSubmitted(false);
      setIsPreloader(false);
    } else {
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <>
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isShort={isShort}
        setIsShort={setIsShort}
        setIsSubmitted={setIsSubmitted}
        isFormError={isFormError}
        setIsFormError={setIsFormError}
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
