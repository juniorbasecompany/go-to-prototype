import { Avatar, Box, Button, Container, Input } from "../../components";

export const Login: React.FC = () => {
  return (
    <Container align='center'>
      <Box border='solid'>
        <Avatar
          align='center'
          size='lg'
          src='https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png'
        ></Avatar>
        <Input size='lg' placeholder='Email' />
        <Input size='lg' placeholder='Password' />
        <Button size='lg' bg='primary'>
          login
        </Button>
        <Button size='lg' bg='primary'>
          sign up
        </Button>
      </Box>
    </Container>
  );
};
