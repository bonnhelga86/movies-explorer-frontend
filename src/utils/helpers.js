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
