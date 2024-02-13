import { Container, Text, useMantineTheme } from "@mantine/core";
import AuthForm from "../Components/LoginForm";

const LoginPage = () => {


  return (
    <Container sx={{ paddingX: 24, paddingY: 4 }} size="sm">
    <Text  size="xl">Log in</Text>
      <AuthForm isLogin />
    </Container>
  );
};

export default LoginPage;