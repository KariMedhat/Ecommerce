import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  StyledLink,
} from "./styles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <StyledLink to="/">
            <Button>LOGIN</Button>
          </StyledLink>
          <StyledLink to="/">DO NOT REMEMBER THE PASSWORD?</StyledLink>
          <StyledLink to="/register">CREATE A NEW ACCOUNT</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
