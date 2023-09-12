import React from 'react';
import SearchForm from '../../Sections/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

function Movies({ movies, searchQuery, setSearchQuery }) {
  const [moviesForShow, setMoviesForShow] = React.useState([]);

  function getFilterMoviesList() {
    if (searchQuery) {
      return movies.filter((movie) => {
        return (movie.nameRU.includes(searchQuery) || movie.nameEN.includes(searchQuery))
      });
    } else {
      return [];
    }
  }

  React.useEffect(() => {
    setMoviesForShow(movies);
    // setMoviesForShow(getFilterMoviesList());


  }, [movies, searchQuery]);

  return (
    <>
      <SearchForm setSearchQuery={setSearchQuery} />
      <section className="movies" aria-label="Секция с фильмами">
      {!searchQuery
        ? <p className="movies__no-query">Здесь пока пусто. Найдите фильмы по поиску.</p>
        : (moviesForShow.length === 0)
            ? <p className="movies__error-query">Ничего не найдено</p>
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
