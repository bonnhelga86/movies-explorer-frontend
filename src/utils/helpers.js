import { WINDOW_WIDTH, MOVIES_COUNT, MOVIES_DURATION } from './config';

export const handler = () => {
  if (window.innerWidth >= WINDOW_WIDTH.bigWidth) {
    return {
      initialMoviesCount: MOVIES_COUNT.bigWidth.initialMoviesCount,
      extraMoviesCount: MOVIES_COUNT.bigWidth.extraMoviesCount
    }
  } else if (window.innerWidth < WINDOW_WIDTH.bigWidth && window.innerWidth > WINDOW_WIDTH.middleWidth) {
    return {
      initialMoviesCount: MOVIES_COUNT.middleWidth.initialMoviesCount,
      extraMoviesCount: MOVIES_COUNT.middleWidth.extraMoviesCount
    }
  } else if (window.innerWidth <= WINDOW_WIDTH.middleWidth && window.innerWidth > WINDOW_WIDTH.smallWidth) {
    return {
      initialMoviesCount: MOVIES_COUNT.smallWidth.initialMoviesCount,
      extraMoviesCount: MOVIES_COUNT.smallWidth.extraMoviesCount
    }
  } else if (window.innerWidth <= WINDOW_WIDTH.smallWidth) {
    return {
      initialMoviesCount: MOVIES_COUNT.mobileWidth.initialMoviesCount,
      extraMoviesCount: MOVIES_COUNT.mobileWidth.extraMoviesCount
    }
  }
};

export const mediaQuery = [
  window.matchMedia(`(min-width: ${WINDOW_WIDTH.bigWidth}px)`),
  window.matchMedia(`(max-width: ${WINDOW_WIDTH.middleWidth}px)`),
  window.matchMedia(`(max-width: ${WINDOW_WIDTH.smallWidth}px)`)
];

export function prepareMovies(movies) {
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
};

export function getFilterMoviesList(movies, searchQuery, isShort) {
  if (searchQuery) {
    return movies.filter((movie) => {
      return (  (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
                  || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
                )
                && (isShort ? movie.duration <= MOVIES_DURATION.duration : true)
              );
    });
  }
}
