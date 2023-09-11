import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Sections/Header/Header';
import SliderMenuPopup from '../Sections/SliderMenuPopup/SliderMenuPopup';
import CustomRoutes from '../CustomComponent/CustomRoutes';
import Footer from '../Sections/Footer/Footer';
import api from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const location = useLocation();

  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({name: 'Виталий', email: 'pochta@yandex.ru'});
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isSliderMenuPopupOpen, setIsSliderMenuPopupOpen] = React.useState(false);

  React.useEffect(() => {
      api.getMovies()
      .then((moviesData) => {
        setMovies(moviesData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {(location.pathname !== '/not-found')
        && <Header
              isLoggedIn={isLoggedIn}
              isPopupOpen={isSliderMenuPopupOpen}
              changePopupOpen={setIsSliderMenuPopupOpen}
            />
      }

      <main className="content">
        <CustomRoutes movies={movies} />
      </main>

      {(location.pathname === '/'
        || location.pathname === '/movies'
        || location.pathname === '/saved-movies'
      )
        && <Footer />
      }

      <SliderMenuPopup
        isPopupOpen={isSliderMenuPopupOpen}
        changePopupOpen={setIsSliderMenuPopupOpen}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
