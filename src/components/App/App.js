import React from 'react';
import Header from '../Sections/Header/Header';
import CustomRoutes from '../CustomComponent/CustomRoutes';
import { movieList } from '../../utils/movieList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [movies, setMovies] = React.useState(movieList);
  const [savedMovies, setSavedMovies] = React.useState([]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <main className="content">
        <CustomRoutes movies={movies} savedMovies={savedMovies} />
      </main>
    </>
  );
}

export default App;
