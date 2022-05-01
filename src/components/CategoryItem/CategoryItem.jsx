import React from "react";
import { Container, Image, Info, Title, Button, StyledLink } from "./styles";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <StyledLink defaultValue={item.id} to='/productlist'>

        <Button>SHOP NOW</Button>
        </StyledLink>
      </Info>
    </Container>
  );
};

export default CategoryItem;
