
import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

interface User {
  username: string;
  password: string;
}

interface LoginProps  {
  values: User;
  onLogin: () => void;
  onSetValues: (value: string, field: string) => void;
}

export const useLoginHelper = (): LoginProps => {
  const initialValues = {username: '', password: ''};
  const [values, setValues] = React.useState<User>(initialValues);

  const handleLogin = () => {
    axios.get(`${BASE_URL}/users`)
    .then(response => {
      const userLogged = response.data.find((user: User) => {
        return user.username === values.username && user.password === values.password;
      });
      console.log(userLogged);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const handleSetValues = (value: string, field: string) => {
    setValues({...values, [field]: value});
  }

  return {
    values,
    onSetValues: handleSetValues,
    onLogin: handleLogin,
  };
};
