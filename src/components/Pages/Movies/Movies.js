import React from 'react';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import SearchForm from '../../Elements/SearchForm/SearchForm';
import Preloader from '../../Elements/Preloader/Preloader';
import api from '../../../utils/MoviesApi';
import { prepareMovies, getFilterMoviesList } from '../../../utils/helpers';
import { getLikesMovies, saveLikesMovie, deleteLikesMovie } from '../../../utils/apiHelpers';

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [likesMovies, setLikesMovies] = React.useState([]);
  const [moviesForShow, setMoviesForShow] = React.useState([]);

  const [initialSearchQuery, setInitialSearchQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [initialIsShort, setInitialIsShort] = React.useState(false);
  const [isShort, setIsShort] = React.useState(false);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);

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

  React.useEffect(() => {
    getLocal();
    getLikesMovies(setLikesMovies);
  }, []);

  React.useEffect(() => {
    if (moviesForShow.length > 0) {
      const copyMoviesForShow = moviesForShow.slice(0);
      setMoviesForShow(handleSetLikesStatus(copyMoviesForShow));
    }
  }, [likesMovies]);

  React.useEffect(() => {
    if(movies.length > 0) {
      getLikesMovies(setLikesMovies);
      const filterMovies = prepareMovies(getFilterMoviesList(movies, searchQuery, isShort));
      const filterMoviesWithLikes = handleSetLikesStatus(filterMovies);
      setMoviesForShow(filterMoviesWithLikes);
      saveLocal(filterMoviesWithLikes);
    }
  }, [movies]);

  React.useEffect(() => {
    if(searchQuery && (searchQuery !== initialSearchQuery || isShort !== initialIsShort)) {
      setIsPreloader(true);
      api.getMovies()
      .then((moviesData) => {
        setInitialSearchQuery(searchQuery);
        setInitialIsShort(isShort);
        setMovies(moviesData);
      })
      .catch(() => {
        console.error(`Во время запроса произошла ошибка. Возможно, проблема с соединением
                        или сервер недоступен. Подождите немного и попробуйте ещё раз.`
        );
      })
      .finally(() => {
        setIsSubmitted(false);
        setIsPreloader(false);
      });
    } else {
      setIsSubmitted(false);
    }
  }, [isSubmitted])

  return (
    <>
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        setSearchQuery={setSearchQuery}
        isShort={isShort}
        setIsShort={setIsShort}
        setIsSubmitted={setIsSubmitted}
      />
      <section className="movies" aria-label="Секция с фильмами">
      {!searchQuery
        ? <p className="movies__query">Здесь пока пусто. Найдите фильмы по поиску.</p>
        : (isPreloader)
            ? <Preloader />
            : (moviesForShow.length === 0)
                ? <p className="movies__query">Ничего не найдено</p>
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
