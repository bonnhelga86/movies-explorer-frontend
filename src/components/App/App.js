import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Sections/Header/Header';
import SliderMenuPopup from '../Sections/SliderMenuPopup/SliderMenuPopup';
import CustomRoutes from '../Routes/CustomRoutes';
import Footer from '../Sections/Footer/Footer';
import { logout, tokenCheck } from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isSliderMenuPopupOpen, setIsSliderMenuPopupOpen] = React.useState(false);
  console.log('isLoggedIn', isLoggedIn);
  if (isLoggedIn) {
    console.log('isLoggedIn in if', isLoggedIn);
    console.log('I am here');
  }

  function handleLoggedIn(data) {
    setCurrentUser(data);
    setIsLoggedIn(true);
  }

  function isTokenCheck() {
    tokenCheck()
      .then(data => {
        if(data) {
          handleLoggedIn(data);
        }
      })
      .catch(error => {
        setIsLoggedIn(false);
        console.error(error);
      });
  }

  function handleLogout() {
    logout()
    .then(data => {
      setIsLoggedIn(false);
      setCurrentUser({});
      localStorage.removeItem('localMovies');
      localStorage.removeItem('localQuery');
      navigate('/signin', {replace: true});
      return data;
    })
    .catch(error => {
      console.error(error);
    });
  }

  React.useEffect(() => {
    isTokenCheck();
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

    // <CurrentUserContext.Provider value={currentUser}>

    //     {(location.pathname !== '/not-found')
    //       && <Header
    //             isLoggedIn={isLoggedIn}
    //             isPopupOpen={isSliderMenuPopupOpen}
    //             changePopupOpen={setIsSliderMenuPopupOpen}
    //           />
    //     }

    //     <main className="content">
    //       <CustomRoutes
    //         isLoggedIn={isLoggedIn}
    //         handleLoggedIn={handleLoggedIn}
    //         handleLogout={handleLogout}
    //         setCurrentUser={setCurrentUser}
    //       />
    //     </main>

    //     {(location.pathname === '/'
    //       || location.pathname === '/movies'
    //       || location.pathname === '/saved-movies'
    //     )
    //       && <Footer />
    //     }

    //     <SliderMenuPopup
    //       isPopupOpen={isSliderMenuPopupOpen}
    //       changePopupOpen={setIsSliderMenuPopupOpen}
    //     />

    // </CurrentUserContext.Provider>
  );
}

export default App;
