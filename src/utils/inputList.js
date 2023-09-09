const inputList = {
  name: {
    label: 'Имя',
    name: 'name',
    type: 'text',
    extraProps: {
      minLength: '2',
      maxLength: '30'
    }
  },
  email: {
    label: 'E-mail',
    name: 'email',
    type: 'email'
  },
  password: {
    label: 'Пароль',
    name: 'password',
    type: 'password'
  }
}

export const registerInputList = [inputList.name, inputList.email, inputList.password];
export const loginInputList = [inputList.email, inputList.password];
export const profileInputList = [inputList.name, inputList.email];
