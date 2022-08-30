import React from 'react';
import { Avatar, Box, Button, Container, Input } from '../../components';
import { useLoginHelper } from './login.hook';

export const Login: React.FC = () => {
  const { values, onSetValues, onLogin } = useLoginHelper();

  return (
    <Container align="center">
      <Box border="solid">
        <Avatar
          align="center"
          size="lg"
          src="https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"
        ></Avatar>
        <Input
          size="lg"
          placeholder="Username"
          name="username"
          value={values.username}
          onChange={(e) => onSetValues(e.target.value, 'username')}
        />
        <Input
          size="lg"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={(e) => onSetValues(e.target.value, 'password')}
        />
        <Button size="lg" bg="primary" onClick={onLogin}>
          login
        </Button>
        <Button size="lg" bg="primary">
          sign up
        </Button>
      </Box>
    </Container>
  );
};
