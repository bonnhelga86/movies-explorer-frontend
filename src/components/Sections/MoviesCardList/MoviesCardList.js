import React from 'react';
import { useRef } from 'react';
import MoviesCard from '../../Elements/MoviesCard/MoviesCard';
import { handler, mediaQuery } from '../../../utils/helpers';

function MoviesCardList({ movies, type, buttonLabel, handleLikesMovie }) {
  const initial = useRef(false)

  const [initialMoviesCount, setInitialMoviesCount] = React.useState(0);
  const [extraMoviesCount, setExtraMoviesCount] = React.useState(0);
  let [moviesPage, setMoviesPage] = React.useState(0);
  const [showMovies, setShowMovies] = React.useState([]);
  const moviesTotalCount = movies.length;

  const handlerMoviesCount = () => {
    const { initialMoviesCount, extraMoviesCount } = handler();
    setInitialMoviesCount(initialMoviesCount);
    setExtraMoviesCount(extraMoviesCount);
  }

  const getExtraMovies = () => {
    const endCount = (initialMoviesCount + extraMoviesCount *moviesPage);
    setShowMovies([
      ...showMovies,
      ...movies.slice((showMovies.length), endCount)
    ]);
  }

  React.useEffect(() => {
    mediaQuery.map(item => {
      item.addEventListener('change', handlerMoviesCount);
    });
    handlerMoviesCount();
    return () => {
      mediaQuery.map(item => {
        item.removeEventListener('change', handlerMoviesCount);
      })
    }
  }, []);

  React.useEffect(() => {
    initial.current = true;
    setShowMovies(movies.slice(0, initialMoviesCount));
  }, [movies, initialMoviesCount]);

  React.useEffect(() => {
    if (initial.current) {
      if (moviesPage !== 0) {
        getExtraMovies();
      }
      initial.current = false;
    }
  }, [showMovies]);

  React.useEffect(() => {
    if (moviesPage !== 0) {
      getExtraMovies();
    }
  }, [moviesPage]);

  return (
    <>
      <ul className="movies__list page__list">
        {showMovies.map(showMovie => (
          <MoviesCard
            key={showMovie.nameRU}
            movie={showMovie}
            likes={showMovie.isLiked ? 'likes' : 'unlikes'}
            type={type}
            buttonLabel={buttonLabel}
            handleLikesMovie={handleLikesMovie}
          />
        ))}
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
