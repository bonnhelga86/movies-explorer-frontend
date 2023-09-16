import React from 'react';
import MoviesCard from '../../Elements/MoviesCard/MoviesCard';
import { handler, mediaQuery } from '../../../utils/helpers';

function MoviesCardList({ movies, likesMovies=[], type, buttonLabel, handleLikesMovie }) {
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
    setShowMovies(movies.slice(0, initialMoviesCount));
  }, [movies, initialMoviesCount]);

  React.useEffect(() => {
    const endCount = (initialMoviesCount + extraMoviesCount *moviesPage);
    setShowMovies([
      ...showMovies,
      ...movies.slice((showMovies.length), endCount)
    ]);
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
