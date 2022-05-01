import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 255, 0, 0.1)),
    url("https://img.freepik.com/free-photo/portrait-young-female-jumping-with-megaphone_23-2148883670.jpg?t=st=1651210594~exp=1651211194~hmac=15f7552d26847fd5ab38cf99829ef65192b656bc940cf3454ffbedfdaf055c58&w=1380")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  margin-left: 90px;
  background-color: white;
  ${mobile({ width: "75%", margin: "0px" })}
`;
export const Title = styled.h1`
  font-size: 24;
  font-weight: 300;
  ${mobile({ fontSize: "22px" })}
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const StyledLink = styled(Link)`
  width: 20%;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  background-color: teal;
  color: white;
`;
