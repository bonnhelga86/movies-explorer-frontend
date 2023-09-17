import { getMovies, saveMovie, deleteMovie } from './MainApi';

export function getLikesMovies(setMovies) {
  getMovies()
  .then(moviesData => {
    setMovies(moviesData);
  })
  .catch(() => {
    console.error(`Во время запроса произошла ошибка. Возможно, проблема с соединением
                    или сервер недоступен. Подождите немного и попробуйте ещё раз.`
    );
  });
}

export function saveLikesMovie({ isLiked, ...movie}, likesMovies, setLikesMovies) {
  saveMovie(movie)
  .then(data => {
    if(data) {
      setLikesMovies([...likesMovies, data]);
    }
  })
  .catch(error => {
    console.error(error);
  });
}

export function deleteLikesMovie(id, setMovies) {
  deleteMovie(id)
  .then(() => {
    getLikesMovies(setMovies);
  })
  .catch(error => {
    console.error(error);
  })
}
