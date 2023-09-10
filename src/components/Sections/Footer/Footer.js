import Navigation from '../../Elements/Navigation/Navigation';
import { footerNavigations } from '../../../utils/navigationList';

function Footer() {
  return (
    <footer className="footer">

        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>

        <div className="footer__wrap">
          <p className="footer__copyright">&copy; 2023</p>
          <Navigation navigations={footerNavigations} parent={'footer'} />
        </div>

    </footer>
  );
}

export default Footer;
