export const handler = () => {
  if (window.innerWidth >= 1233) {
    return {
      initialMoviesCount: 16,
      extraMoviesCount: 4
    }
  } else if (window.innerWidth < 1233 && window.innerWidth > 960) {
    return {
      initialMoviesCount: 12,
      extraMoviesCount: 3
    }
  } else if (window.innerWidth <= 960 && window.innerWidth > 675) {
    return {
      initialMoviesCount: 8,
      extraMoviesCount: 2
    }
  } else if (window.innerWidth <= 675) {
    return {
      initialMoviesCount: 5,
      extraMoviesCount: 2
    }
  }
};

export const mediaQuery = [
  window.matchMedia('(min-width: 1233px)'),
  window.matchMedia('(max-width: 960px)'),
  window.matchMedia('(max-width: 675px)')
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
                && (isShort ? movie.duration <= 40 : true)
              );
    });
  }
}
