import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">

        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>

        <div className="footer__wrap">
          <p className="footer__copyright">&copy; 2023</p>
          <nav className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item">
                <Link
                  to="https://practicum.yandex.ru/"
                  className="header__menu-link"
                  target="_blank"
                >
                  Яндекс.Практикум
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  to="https://github.com/bonnhelga86"
                  className="header__menu-link"
                  target="_blank"
                >
                  Github
                </Link>
              </li>
            </ul>
          </nav>
        </div>

    </footer>
  );
}

export default Footer;
