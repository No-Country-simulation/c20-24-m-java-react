const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userRegExp = /^[a-zA-Z0-9]+$/;
const nameRegExp = /^[a-zA-Z0-9 ]+$/;
const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,15}$/;
const onlypositivenumbers = /^[0-9]+$/;

const validateRegister = ({ name, email, password }) => {
  const errors = {
    name: '',
    email: '',
    password: '',
    // confirmPassword: '',
  };
  if (!name) errors.name = ' ';
  if (name.trim().length < 1 || name.trim().length > 30) {
    errors.name = 'El nombre debe tener entre 2 y 30 caracteres';
  } else if (!nameRegExp.test(name)) {
    errors.name = 'Este campo no acepta caracteres especiales.';
  }
  if (!email) errors.email = ' ';
  else if (!emailRegExp.test(email)) {
    errors.email = 'Correo electrónico invalido';
  }
  if (!password) errors.password = ' ';
  else if (!passwordRegExp.test(password))
    errors.password =
      'Almenos: una mayúscula, una minúscula, un carácter especial y un número.';

  return errors;
};

export default validateRegister;
