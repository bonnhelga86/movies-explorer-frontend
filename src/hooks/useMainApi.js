import { useNavigate } from 'react-router-dom';

import {
  getMovies,
  saveMovie,
  deleteMovie,
  tokenCheck,
  login,
  register,
  updateUser,
  logout
} from '../utils/MainApi';

export function useMainApi() {
  const navigate = useNavigate();

  async function getLikesMovies(setMovies, setUserErrorResponse) {
    try {
      setUserErrorResponse('');
      const getMoviesResponse =  await getMovies();
      if (getMoviesResponse) {
        setMovies(getMoviesResponse);
      }
    } catch (error) {
      setUserErrorResponse(`Во время запроса произошла ошибка. Возможно, проблема с соединением
        или сервер недоступен. Подождите немного и попробуйте ещё раз.`
      );
    }
  }

  async function saveLikesMovie({ isLiked, ...movie}, likesMovies, setLikesMovies) {
    try {
      const saveMovieResponse =  await saveMovie(movie);
      if (saveMovieResponse) {
        setLikesMovies([...likesMovies, saveMovieResponse]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteLikesMovie(id, setMovies, setUserErrorResponse) {
    try {
      const deleteMovieResponse =  await deleteMovie(id);
      if (deleteMovieResponse) {
        getLikesMovies(setMovies, setUserErrorResponse);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function tokenCheckUser(handleLoggedIn, setIsLoggedIn) {
    try {
      const tokenCheckResponse =  await tokenCheck();
      if (tokenCheckResponse) {
        handleLoggedIn(tokenCheckResponse);
      }
    } catch (error) {
      setIsLoggedIn(false);
      console.error(error);
    }
  }

  async function loginUser(email, password, handleLoggedIn, setIsFormError, setErrorMessage) {
    try {
      const loginResponse =  await login(email, password);
      if (loginResponse) {
        const tokenCheckResponse =  await tokenCheck();
        if (tokenCheckResponse) {
          handleLoggedIn(tokenCheckResponse);
          navigate('/movies', {replace: true});
        }
      }
    } catch (error) {
        setIsFormError(true);
        setErrorMessage(error);
    }
  }

  async function registerUser(name, email, password, handleLoggedIn, setIsFormError, setErrorMessage) {
    try {
      const registerResponse = await register(name, email, password);
      if (registerResponse) {
        loginUser(email, password, handleLoggedIn, setIsFormError, setErrorMessage);
      }
    } catch (error) {
        setIsFormError(true);
        setErrorMessage(error);
    }
  }

  async function updateUserData(
    name,
    email,
    setCurrentUser,
    setInitialInputValue,
    setIsFormError,
    setErrorMessage,
    setSuccessMessage
  ) {
    try {
      const updateResponse = await updateUser(name, email);
      if (updateResponse) {
        setCurrentUser(updateResponse);
        setInitialInputValue(updateResponse);
        setSuccessMessage('Обновление прошло успешно.');
      }
    } catch (error) {
        setIsFormError(true);
        setErrorMessage(error);
    }
  }

  async function logoutUser(setIsLoggedIn, setCurrentUser) {
    try {
      const logoutResponse =  await logout();
      if (logoutResponse) {
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem('localMovies');
        localStorage.removeItem('localQuery');
        navigate('/signin', {replace: true});
        return logoutResponse;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getLikesMovies,
    saveLikesMovie,
    deleteLikesMovie,
    tokenCheckUser,
    registerUser,
    loginUser,
    updateUserData,
    logoutUser
  };
}
