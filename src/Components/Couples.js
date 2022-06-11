import React from "react";
import style from "styled-components";

const Couples = () => {
  return (
    <div>
      <Container>
        <None></None>

        <Wrapper>
          <Title>COUPLES COLLECTIONS</Title>
          <First>
            <Card src={"/Couples/Couple10.jpg"} />
            <Card src={"/Couples/Couple16.jpg"} />
            <Card src={"/Couples/Couple18.jpg"} />
            <Card src={"/Couples/Couple9.jpg"} />
            <Card src={"/Couples/Couple19.jpg"} />
            <Card src={"/Couples/Couple17.jpg"} />
            <Card src={"/Couples/Couple13.jpg"} />
            <Card src={"/Couples/Couple25.jpg"} />
            <Card src={"/Couples/Couple3.jpg"} />
            <Card src={"/Couples/Couple1.jpg"} />
            <Card src={"/Couples/Couple11.jpg"} />
          </First>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Couples;

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
