import React from "react";
import {
  Center,
  SearchContainer,
  Container,
  Language,
  Left,
  Right,
  Wrapper,
  Input,
  Logo,
  MenuItem,
  StyledLink,
} from "./styles";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link  to="/">
            <Logo />
          </Link>
        </Center>
        <Right>
          <StyledLink to='/register'><MenuItem>REGISTER</MenuItem></StyledLink>
          <StyledLink to='/login'><MenuItem>SIGN IN</MenuItem></StyledLink>
          <MenuItem>
          <StyledLink to='/cart'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </StyledLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
