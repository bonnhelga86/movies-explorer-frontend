import React from 'react';
import SearchForm from '../../Elements/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import api from '../../../utils/MoviesApi';
import Preloader from '../../Elements/Preloader/Preloader';
import { getMovies, saveMovie, deleteMovie } from '../../../utils/MainApi';

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [likesMovies, setLikesMovies] = React.useState([]);
  const [moviesForShow, setMoviesForShow] = React.useState([]);

  const [initialSearchQuery, setInitialSearchQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [initialisShort, setInitialIsShort] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);

  function prepareMovies(movies) {
    return movies.map(movie => {
      return {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }
    })
  }

  function saveLocal() {
    localStorage.setItem('localMovies', JSON.stringify(moviesForShow));
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

  function getFilterMoviesList() {
    if (searchQuery) {
      return movies.filter((movie) => {
        return (  (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
                    || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  && (isShort ? movie.duration <= 40 : true)
                );
      });
    }
  }

  function handleGetLikesMovies() {
    getMovies()
    .then(moviesData => {
      setLikesMovies(moviesData);
    })
    .catch(() => {
      console.error(`Во время запроса произошла ошибка. Возможно, проблема с соединением
                      или сервер недоступен. Подождите немного и попробуйте ещё раз.`
      );
    });
  }

  function handleSaveLikesMovie({ isLiked, ...movie}) {
    saveMovie(movie)
    .then(data => {
      if(data) {
        setLikesMovies([...likesMovies, data]);
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  function handleDeleteLikesMovie(id) {
    console.log('delete movie', id);
  }

  function handleSetLikesStatus(movies) {
    const likedMoviesIdList = likesMovies.map(({movieId}) => movieId);
    movies.forEach((movie) => movie.isLiked = likedMoviesIdList.includes(movie.movieId));
    return movies;
  }

  function handleLikesMovie(movie) {
    if ((likesMovies.filter(likesMovie => likesMovie.movieId === movie.id)).length > 0) {
      handleDeleteLikesMovie(movie.id);
    } else {
      handleSaveLikesMovie(movie);
    }
  }

  React.useEffect(() => {
    getLocal();
    handleGetLikesMovies();
  }, []);

  React.useEffect(() => {
    if (moviesForShow.length > 0) {
      const copyMoviesForShow = moviesForShow.slice(0);
      setMoviesForShow(handleSetLikesStatus(copyMoviesForShow));
    }
  }, [likesMovies]);

  React.useEffect(() => {
    if(movies.length > 0) {
      handleGetLikesMovies();
      const filterMovies = prepareMovies(getFilterMoviesList());
      setMoviesForShow(handleSetLikesStatus(filterMovies));
      saveLocal();
      setInitialSearchQuery(searchQuery);
      setInitialIsShort(isShort);
    }
  }, [movies]);

  React.useEffect(() => {
    if(searchQuery && (searchQuery !== initialSearchQuery || isShort !== initialisShort)) {
      setIsPreloader(true);
      api.getMovies()
      .then((moviesData) => {
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
                    likesMovies={likesMovies}
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
