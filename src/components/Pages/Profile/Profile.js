import { Link } from 'react-router-dom';
import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function Profile() {
  return (
    <section className="profile">
      <h2>Привет, Ольга!</h2>
      <Form type={'profile'} buttonValue={'Редактировать'} >
        <label className='form__label form__label_type_profile'>
          Имя
          <Input
            name={'profile-name'}
            className={'form__input'}
            placeholder={'Ваше имя'}
          />
        </label>

        <label className='form__label form__label_type_profile'>
          E-mail
          <Input
            name={'profile-email'}
            className={'form__input'}
            placeholder={'Ваш email'}
          />
        </label>
      </Form>

      <Link
        to='/signin'
        className="profile__sign-link"
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
