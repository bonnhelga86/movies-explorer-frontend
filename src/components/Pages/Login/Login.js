import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { loginInputList } from '../../../utils/inputList';

function Login() {
  return (
    <div className="sign">

      <UserForm
        title={'Рады видеть!'}
        formName={'login'}
        type={'sign'}
        inputList = {loginInputList}
        buttonValue={'Войти'}
      />

      <p className="sign__text">
        Ещё не зарегистрированы?
        <Link to="/signup" className="sign__link">
          Регистрация
        </Link>
      </p>

    </div>
  );
}

export default Login;
