import api from '../utils/MoviesApi';

export function useMoviesApi() {

  async function getAllMovies(
    setInitialSearchQuery,
    searchQuery,
    setInitialIsShort,
    isShort,
    setMovies,
    setUserErrorResponse
  ) {
    try {
      setUserErrorResponse('');
      const getMoviesResponse =  await api.getMovies();
      if (getMoviesResponse) {
        setInitialSearchQuery(searchQuery);
        setInitialIsShort(isShort);
        setMovies(getMoviesResponse);
      }
    } catch (error) {
      setUserErrorResponse(`Во время запроса произошла ошибка. Возможно, проблема с соединением
        или сервер недоступен. Подождите немного и попробуйте ещё раз.`
      );
    }
  }

  return { getAllMovies };
}
