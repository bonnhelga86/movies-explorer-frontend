import React, { useRef } from 'react';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import SearchForm from '../../Elements/SearchForm/SearchForm';
import Preloader from '../../Elements/Preloader/Preloader';
import { prepareMovies, getFilterMoviesList } from '../../../utils/helpers';
import { useMainApi } from '../../../hooks/useMainApi';
import { useMoviesApi } from '../../../hooks/useMoviesApi';

function Movies() {
  const firstRender = useRef(true);

  const [movies, setMovies] = React.useState([]);
  const [likesMovies, setLikesMovies] = React.useState([]);
  const [moviesForShow, setMoviesForShow] = React.useState([]);

  const [initialSearchQuery, setInitialSearchQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [initialIsShort, setInitialIsShort] = React.useState(false);
  const [isShort, setIsShort] = React.useState(false);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [userErrorResponse, setUserErrorResponse] = React.useState('');
  const [isFormError, setIsFormError] = React.useState(false);

  const { getLikesMovies, saveLikesMovie, deleteLikesMovie } = useMainApi();
  const { getAllMovies } = useMoviesApi();

  function saveLocal(filterMoviesWithLikes) {
    localStorage.setItem('localMovies', JSON.stringify(filterMoviesWithLikes));
    localStorage.setItem('localQuery', JSON.stringify({localSearchQuery: searchQuery, isShort}));
  }

  function getLocal() {
    const jsonLocalMovies = localStorage.getItem('localMovies');
    const jsonLocalQuery = localStorage.getItem('localQuery');
    if (jsonLocalMovies && jsonLocalQuery) {
      const localMovies = JSON.parse(jsonLocalMovies);
      const { localSearchQuery, isShort } = JSON.parse(jsonLocalQuery);
      setInitialSearchQuery(localSearchQuery);
      setSearchQuery(localSearchQuery);
      setInitialIsShort(isShort);
      setIsShort(isShort);
      setMoviesForShow(localMovies);
    }
  }

  function handleSetLikesStatus(movies) {
    const likedMoviesIdList = likesMovies.map(({movieId}) => movieId);
    movies.forEach((movie) => movie.isLiked = likedMoviesIdList.includes(movie.movieId));
    return movies;
  }

  function handleLikesMovie(movie) {
    const likesFilter = likesMovies.filter(likesMovie => likesMovie.movieId === movie.movieId);
    if (likesFilter.length > 0) {
      deleteLikesMovie(likesFilter[0]._id, setLikesMovies);
    } else {
      saveLikesMovie(movie, likesMovies, setLikesMovies);
    }
  }

  function prepareMoviesForShow() {
    getLikesMovies(setLikesMovies, setUserErrorResponse);
    const filterMovies = prepareMovies(getFilterMoviesList(movies, searchQuery, isShort));
    const filterMoviesWithLikes = handleSetLikesStatus(filterMovies);
    setMoviesForShow(filterMoviesWithLikes);
    saveLocal(filterMoviesWithLikes);
  }

  React.useEffect(() => {
    getLocal();
    getLikesMovies(setLikesMovies, setUserErrorResponse);
  }, []);

  React.useEffect(() => {
    if (moviesForShow.length > 0) {
      const copyMoviesForShow = moviesForShow.slice(0);
      setMoviesForShow(handleSetLikesStatus(copyMoviesForShow));
    }
  }, [likesMovies]);

  React.useEffect(() => {
    if(movies.length > 0) {
      prepareMoviesForShow();
    }
  }, [movies]);

  React.useEffect(() => {
    if(searchQuery && (searchQuery !== initialSearchQuery || isShort !== initialIsShort)) {

      if (firstRender.current) {
        firstRender.current = false;
        setIsPreloader(true);
        getAllMovies(
          setInitialSearchQuery,
          searchQuery,
          setInitialIsShort,
          isShort,
          setMovies,
          setUserErrorResponse
        );
        setIsPreloader(false);
      } else {
        prepareMoviesForShow();
      }

      setIsSubmitted(false);
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
      <section className="movies" aria-label="Секция с фильмами">
      {!initialSearchQuery
        ? <p className="movies__query">Здесь пока пусто. Найдите фильмы по поиску.</p>
        : (isPreloader)
            ? <Preloader />
            : (moviesForShow.length === 0)
                ? <p className="movies__query">
                    {(userErrorResponse) ? userErrorResponse : 'Ничего не найдено'}
                  </p>
                : <MoviesCardList
                    movies={moviesForShow}
                    type={'likes'}
                    buttonLabel={'Лайкнуть'}
                    handleLikesMovie={handleLikesMovie}
                  />
      }
      </section>
    </>
  );
}

export default Movies;
