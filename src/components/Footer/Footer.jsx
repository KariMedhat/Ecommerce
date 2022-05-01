import {
  Facebook,
  Instagram,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import {
  Center,
  Container,
  Left,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
  StyledLink,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Mystore.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          iusto deserunt maxime adipisci nisi eligendi. Illum non neque voluptas
          fugit molestias blanditiis veniam incidunt libero!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><StyledLink to='/'>Home</StyledLink></ListItem>
          <ListItem><StyledLink to='/cart'>Cart</StyledLink></ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/> Lorem ipsum dolor sit amet.
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/> +1 23456 789
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{marginRight: "10px"}}/> contact@email.com
        </ContactItem>
        <Payment src="https://www.pngplay.com/wp-content/uploads/8/Payment-Method-Download-Free-PNG.png" />
      </Right>
    </Container>
  );
};

export default Footer;
