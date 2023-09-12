import React from 'react';
import MoviesCard from '../../Elements/MoviesCard/MoviesCard';
import { handler, mediaQuery } from '../../../utils/helpers';

function MoviesCardList({ movies, type, buttonLabel, searchQuery }) {
  const [initialMoviesCount, setInitialMoviesCount] = React.useState(0);
  const [extraMoviesCount, setExtraMoviesCount] = React.useState(0);
  let [moviesPage, setMoviesPage] = React.useState(0);
  const [showMovies, setShowMovies] = React.useState([]);
  const moviesTotalCount = movies.length;

  console.log('showMovies', showMovies);

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
    const endCount = (initialMoviesCount + extraMoviesCount *moviesPage);
    setShowMovies([
      ...showMovies,
      ...movies.slice((showMovies.length), endCount)
    ]);
  }, [movies, initialMoviesCount, moviesPage]);

  return (
    <>

      <ul className="movies__list page__list">
        {showMovies.map(showMovie => (
          <MoviesCard
            key={showMovie.id}
            title={showMovie.nameRU}
            url={showMovie.image.url}
            trailerLink={showMovie.trailerLink}
            duration={showMovie.duration}
            likes={showMovie.likes}
            type={type}
            buttonLabel={buttonLabel}
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
