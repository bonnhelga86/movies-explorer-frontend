import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { registerInputList } from '../../../utils/inputList';

function Register() {
  return (
    <div className="sign">

      <UserForm
        title={'Добро пожаловать!'}
        formName={'register'}
        type={'sign'}
        inputList = {registerInputList}
        buttonValue={'Зарегистрироваться'}
      />

      <p className="sign__text">
        Уже зарегистрированы?
        <Link to="/signin" className="sign__link">
          Войти
        </Link>
      </p>

    </div>
  );
}

export default Register;
