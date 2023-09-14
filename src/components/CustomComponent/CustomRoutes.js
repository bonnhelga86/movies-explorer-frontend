import {  Route, Routes, Navigate  } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import NotFound from '../Pages/NotFound/NotFound';

function CustomRoutes({ handleLoggedIn, handleLogout, setCurrentUser }) {
  return (
    <Routes>
      <Route path="/signup" element={ <Register handleLoggedIn={handleLoggedIn} /> }/>

      <Route path="/signin" element={ <Login handleLoggedIn={handleLoggedIn} /> }/>

      <Route path="/" element={ <Main /> }/>

      <Route path="/movies" element={ <Movies /> }/>

      <Route path="/saved-movies" element={ <SavedMovies /> }/>

      <Route path="/profile" element={
        <Profile handleLogout={handleLogout} setCurrentUser={setCurrentUser} />
      }/>

      <Route path="/not-found" element={ <NotFound /> }/>

      <Route path="*" element={<Navigate to="/not-found" replace /> }/>

    </Routes>
  );
}

export default CustomRoutes;
