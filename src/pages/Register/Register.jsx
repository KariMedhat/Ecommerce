import React from "react";
import {
  Agreement,
  Container,
  Form,
  Input,
  StyledLink,
  Title,
  Wrapper,
} from "./styles";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <StyledLink to="/login">CREATE</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
