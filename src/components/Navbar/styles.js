import styled from "styled-components";
import PageLogo from "../../assets/logo.png";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 15px;
`;

export const Input = styled.input`
  border: 0px solid;
  outline: none;
  ${mobile({ width: "50px" })}
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  background: url(${PageLogo}) center / cover no-repeat;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
