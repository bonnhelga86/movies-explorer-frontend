import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h2 className="error__code">
        404
      </h2>
      <p className="error__text">Страница не найдена</p>
      <Link to="" onClick={() => navigate(-1)} className="error__link">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
