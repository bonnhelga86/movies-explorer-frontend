import {  Route, Routes, Navigate  } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import NotFound from '../Pages/NotFound/NotFound';
import ProtectedRoute from './ProtectedRoute';
import SignRoute from './SignRoute';

function CustomRoutes({ isLoggedIn, handleLoggedIn, handleLogout, setCurrentUser }) {
  return (
    <Routes>
      <Route path="/signup" element={
        <SignRoute element={Register} isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />}
      />

      <Route path="/signin" element={
        <SignRoute element={Login} isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />}
      />

      <Route path="/" element={ <Main /> }/>

      <Route path="/movies" element={
        <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} /> }
      />

      <Route path="/saved-movies" element={
        <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} /> }
      />

      <Route path="/profile" element={
        <ProtectedRoute
          element={Profile}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          setCurrentUser={setCurrentUser}
        />
      }/>

      <Route path="/not-found" element={ <NotFound /> }/>

      <Route path="*" element={<Navigate to="/not-found" replace /> }/>

    </Routes>
  );
}

export default CustomRoutes;
