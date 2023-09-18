import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Sections/Header/Header';
import SliderMenuPopup from '../Sections/SliderMenuPopup/SliderMenuPopup';
import CustomRoutes from '../Routes/CustomRoutes';
import Footer from '../Sections/Footer/Footer';
import { useMainApi } from '../../hooks/useMainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isSliderMenuPopupOpen, setIsSliderMenuPopupOpen] = React.useState(false);

  const { tokenCheckUser, logoutUser } = useMainApi();

  function handleLoggedIn(data) {
    setCurrentUser(data);
    setIsLoggedIn(true);
  }

  async function handleLogout() {
    logoutUser(setIsLoggedIn, setCurrentUser);
  }

  React.useEffect(() => {
    tokenCheckUser(handleLoggedIn, setIsLoggedIn);
  }, []);

  return (
    <>
      {isLoggedIn != null &&
        <CurrentUserContext.Provider value={currentUser}>

            {(location.pathname !== '/not-found')
              && <Header
                    isLoggedIn={isLoggedIn}
                    isPopupOpen={isSliderMenuPopupOpen}
                    changePopupOpen={setIsSliderMenuPopupOpen}
                  />
            }

            <main className="content">
              <CustomRoutes
                isLoggedIn={isLoggedIn}
                handleLoggedIn={handleLoggedIn}
                handleLogout={handleLogout}
                setCurrentUser={setCurrentUser}
              />
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
      }
    </>
  );
}

export default App;
