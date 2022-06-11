import React from "react";
import style from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Avatar>
            <Logo to="/"></Logo>
            <Dot></Dot>
          </Avatar>
          <Navigations>
            <Nav to="/trending">Trending</Nav>
            <Navs to="/collections">Collections</Navs>
            <Button to="/AboutUs">About Us</Button>
          </Navigations>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Container = style.div`
width: 100%;
height: 80px;
background: #44414C;
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: fixed;
z-index: 1;
`;
const Wrapper = style.div`
width: 90%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
// background: blue;
`;
const Avatar = style.div`
width:160px;
display: flex;
align-items: center;
justify-content: center;
// flex-direction: column;
// background: white;

`;
const Logo = style(Link)`
text-decoration: none;
width: 70px;
height: 70px;
border-radius: 100%;
margin-left: 50px;
background-image: url("/photos/SammyLogo.jpg");
background-size: contain;
margin-left
`;
const Dot = style.div`
text-decoration: none;
color: black;
margin: 5px;
width: 20px;
font-size: 30px;
font-weight: 600;
font-family: poppins;

`;
const Navigations = style.div`
width: 50%;
height: 80px;
display: flex;
align-items: center;
justify-content: space-around;
`;
const Navs = style(Link)`
font-weight: 600;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;
`;
const Nav = style(Link)`
font-weight: 600;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;
`;
const Button = style(Link)`
font-weight: 600;
border: 3px solid;
padding: 10px 23px;
border-radius: 5px;
text-decoration: none;
outline: none;
transition: all 350ms;
transforrm: scale(1);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;

:hover{
    transform: scale(1.03);
    cursor: pointer;
    background: transparent;
}
`;
