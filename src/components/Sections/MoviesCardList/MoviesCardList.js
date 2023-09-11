import React from 'react';
import MoviesCard from '../../Elements/MoviesCard/MoviesCard';

function MoviesCardList({ movies, type, buttonLabel }) {
  const [moviesCount, setMoviesCount] = React.useState(16);
  let [moviesPage, setMoviesPage] = React.useState(1);
  const [showMovies, setShowMovies] = React.useState([]);
  const moviesTotalCount = movies.length;

  const mediaQuery = [
    window.matchMedia('(min-width: 1297px)'),
    window.matchMedia('(max-width: 960px)'),
    window.matchMedia('(max-width: 675px)')
  ]

  const handler = (event) => {
    if (window.innerWidth >= 1297) {
      setMoviesCount(16);
    } else if (window.innerWidth < 1297 && window.innerWidth > 960) {
      setMoviesCount(15);
    } else if (window.innerWidth <= 960 && window.innerWidth > 675) {
      setMoviesCount(8);
    } else if (window.innerWidth <= 675) {
      setMoviesCount(5);
    }
  };

  React.useEffect(() => {
    mediaQuery.map(item => {
      item.addEventListener('change', handler);
    })

    handler();

    return () => {
      mediaQuery.map(item => {
        item.removeEventListener('change', handler);
      })
    }
  }, []);

  React.useEffect(() => {
    setShowMovies(movies.slice(0, moviesCount*moviesPage));
  }, [moviesCount, moviesPage])

  return (
    <>
      <ul className="movies__list page__list">
        {movies.length > 0
          ? showMovies.map(showMovie => (
              <MoviesCard
                key={showMovie.id}
                title={showMovie.title}
                likes={showMovie.likes}
                type={type}
                buttonLabel={buttonLabel}
              />
            ))
          : 'Ничего не нашлось'
        }
      </ul>

      <button
        className={
          `movies__more page__button
          ${moviesTotalCount === showMovies.length && 'movies__more_hidden'}`
        }
        onClick={() => setMoviesPage(++moviesPage)}
      >
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
