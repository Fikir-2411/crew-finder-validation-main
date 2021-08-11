import bcrypt from 'bcrypt';

export const generatePasswordHash = (password) => bcrypt.hash(password, 10);

export const validatePassword = (
    userInputPassword,
    password,
  ) => bcrypt.compare(userInputPassword, password);
  