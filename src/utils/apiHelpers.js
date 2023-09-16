import { getMovies, saveMovie, deleteMovie } from './MainApi';

export function getLikesMovies(setLikesMovies) {
  getMovies()
  .then(moviesData => {
    setLikesMovies(moviesData);
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

export function deleteLikesMovie(id, setLikesMovies) {
  deleteMovie(id)
  .then(() => {
    getLikesMovies(setLikesMovies);
  })
  .catch(error => {
    console.error(error);
  })
}
