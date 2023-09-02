import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { profileInputList } from '../../../utils/inputList';

function Profile() {
  return (
    <section className="profile">

      <UserForm
        title={'Привет, Ольга!'}
        formName={'profile'}
        type={'profile'}
        inputList = {profileInputList}
        buttonValue={'Редактировать'}
      />

      <Link
        to='/signin'
        className="profile__link"
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
