const inputList = {
  name: {
    label: 'Имя',
    name: 'name',
    type: 'text',
    extraProps: {
      placeholder: 'Заполните поле Имя',
      minLength: '2',
      maxLength: '30'
    }
  },
  email: {
    label: 'E-mail',
    name: 'email',
    type: 'email',
    extraProps: {
      placeholder: 'Заполните поле E-mail'
    }
  },
  password: {
    label: 'Пароль',
    name: 'password',
    type: 'password',
    extraProps: {
      placeholder: 'Заполните поле Пароль'
    }
  }
}

export const registerInputList = [inputList.name, inputList.email, inputList.password];
export const loginInputList = [inputList.email, inputList.password];
export const profileInputList = [inputList.name, inputList.email];
