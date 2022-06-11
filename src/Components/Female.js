import React from "react";
import style from "styled-components";

const Female = () => {
  return (
    <div>
      <Container>
        <None></None>
        <Wrapper>
          <Title>FEMALE COLLECTIONS</Title>
          <First>
            <Card src={"/Girls/Girl10.jpg"} />
            <Card src={"/Girls/Girl9.jpg"} />
            <Card src={"/Girls/Girl7.jpg"} />
            <Card src={"/Girls/Girl8.jpg"} />
            <Card src={"/Girls/Girl6.jpg"} />
            <Card src={"/Girls/Girl5.jpg"} />
            <Card src={"/Girls/Girl3.jpg"} />
            <Card src={"/Girls/Girl2.jpg"} />
          </First>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Female;

const Fourth = style.div``;
const Third = style.div``;
const Second = style.div``;
const First = style.div`
width: 100%;
display: flex;
justify-content: center;
align0-items: center;
flex-wrap: wrap;
// margin-top: 80px;
`;
const Card = style.img`
width: 300px;
height: 400px;
background: white;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top: 30px;
margin-left: 20px;
object-fit: cover;
`;

const Wrapper = style.div`
width: 100%;
// height: 100%;
// background: blue;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const None = style.div`
width: 100%;
height: 90px;
// background: blue;

`;
const Collections = style.div``;
const Title = style.div`
margin-top: 30px;
font-size: 40px;
font-weight: 500;
// font-Family: poppins;
`;
const Container = style.div`
width: 100%;
height: calc(100vh - 80px);
// background: blue;
`;
