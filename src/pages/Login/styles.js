import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 255, 0, 0.1)),
    url("https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?t=st=1651201214~exp=1651201814~hmac=02c6dab4b5c089d1f8d1565d274038a3765b5b6b3b331938067e6a9b27edabe7&w=1380")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
  font-size: 24;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
`;
