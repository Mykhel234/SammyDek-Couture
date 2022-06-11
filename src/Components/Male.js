import React from "react";
import style from "styled-components";

const Male = () => {
  return (
    <div>
      <Container>
        <None></None>

        <Wrapper>
          <Title>MALE COLLECTIONS</Title>
          <First>
            <Card src={"/Guys/Guy10.jpg"} />
            <Card src={"/Guys/Guy15.jpg"} />
            <Card src={"/Guys/Guy19.jpg"} />
            <Card src={"/Guys/Guy14.jpg"} />
            <Card src={"/Guys/Guy7.jpg"} />
            <Card src={"/Guys/Guy22.jpg"} />
            <Card src={"/Guys/Guy10.jpg"} />
            <Card src={"/Guys/Guy9.jpg"} />
            <Card src={"/Guys/Guy8.jpg"} />
            <Card src={"/Guys/Guy13.jpg"} />
            <Card src={"/Guys/Guy1.jpg"} />
            <Card src={"/Guys/Guy3.jpg"} />
          </First>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Male;

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
background: silver;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const None = style.div`
width: 100%;
height: 80px;
// background: #1D1D1D;

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
// background: #1D1D1D;
`;
