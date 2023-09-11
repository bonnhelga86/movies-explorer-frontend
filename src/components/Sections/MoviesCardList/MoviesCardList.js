import React from 'react';
import MoviesCard from '../../Elements/MoviesCard/MoviesCard';

function MoviesCardList({ movies, type, buttonLabel }) {
  const [initialMoviesCount, setInitialMoviesCount] = React.useState(0);
  const [extraMoviesCount, setExtraMoviesCount] = React.useState(4);
  let [moviesPage, setMoviesPage] = React.useState(0);
  const [showMovies, setShowMovies] = React.useState([]);
  const moviesTotalCount = movies.length;

  console.log('movies', movies);

  const mediaQuery = [
    window.matchMedia('(min-width: 1233px)'),
    window.matchMedia('(max-width: 960px)'),
    window.matchMedia('(max-width: 675px)')
  ];

  const handler = () => {
    if (window.innerWidth >= 1233) {
      setInitialMoviesCount(16);
      setExtraMoviesCount(4);
    } else if (window.innerWidth < 1233 && window.innerWidth > 960) {
      setInitialMoviesCount(12);
      setExtraMoviesCount(3);
    } else if (window.innerWidth <= 960 && window.innerWidth > 675) {
      setInitialMoviesCount(8);
      setExtraMoviesCount(2);
    } else if (window.innerWidth <= 675) {
      setInitialMoviesCount(5);
      setExtraMoviesCount(2);
    }
  };

  React.useEffect(() => {
    mediaQuery.map(item => {
      item.addEventListener('change', handler);
    });
    handler();
    return () => {
      mediaQuery.map(item => {
        item.removeEventListener('change', handler);
      })
    }
  }, []);

  React.useEffect(() => {
    const endCount = (initialMoviesCount + extraMoviesCount *moviesPage);
    setShowMovies([
      ...showMovies,
      ...movies.slice((showMovies.length), endCount)
    ]);
  }, [initialMoviesCount, moviesPage]);

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
        type="button"
      >
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
