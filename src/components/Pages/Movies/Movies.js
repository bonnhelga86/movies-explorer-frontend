import React from 'react';
import SearchForm from '../../Sections/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import api from '../../../utils/MoviesApi';
import Preloader from '../../Elements/Preloader/Preloader';

function Movies() {
  // localStorage.removeItem('token');
  const [movies, setMovies] = React.useState([]);

  const [initialSearchQuery, setInitialSearchQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [initialisShort, setInitialIsShort] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);
  const [moviesForShow, setMoviesForShow] = React.useState([]);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);

  React.useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('localMovies'));
    const { localSearchQuery, isShort } = JSON.parse(localStorage.getItem('localQuery'));
    setInitialSearchQuery(localSearchQuery);
    setSearchQuery(localSearchQuery);
    setInitialIsShort(isShort);
    setIsShort(isShort);
    setMoviesForShow(localMovies);
  }, []);

  function saveLocal() {
    localStorage.setItem('localMovies', JSON.stringify(moviesForShow));
    localStorage.setItem('localQuery', JSON.stringify({localSearchQuery: searchQuery, isShort}));
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

  React.useEffect(() => {
    if(movies.length > 0) {
      setMoviesForShow(getFilterMoviesList());
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
                    searchQuery={searchQuery}
                    type={'likes'}
                    buttonLabel={'Лайкнуть'}
                  />
      }
      </section>
    </>
  );
}

export default Movies;
