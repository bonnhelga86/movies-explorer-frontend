import api from '../utils/MoviesApi';

export function useMoviesApi() {

  async function getAllMovies(setMovies, setUserErrorResponse) {
    try {
      setUserErrorResponse('');
      const getMoviesResponse =  await api.getMovies();
      if (getMoviesResponse) {
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
