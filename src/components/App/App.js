import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Sections/Header/Header';
import CustomRoutes from '../CustomComponent/CustomRoutes';
import Footer from '../Sections/Footer/Footer';
import { movieList } from '../../utils/movieList';

function App() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [movies, setMovies] = React.useState(movieList);
  const [savedMovies, setSavedMovies] = React.useState([]);

  return (
    <>
      {(location.pathname !== '/not-found') && <Header isLoggedIn={isLoggedIn} />}

      <main className="content">
        <CustomRoutes movies={movies} savedMovies={savedMovies} />
      </main>

      {(location.pathname === '/'
        || location.pathname === '/movies'
        || location.pathname === '/saved-movies'
      )
        && <Footer />
      }
    </>
  );
}

export default App;
