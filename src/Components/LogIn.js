import React from "react";
import style from "styled-components";

const LogIn = () => {
  return (
    <div>
      <Container>
        <Card>
          <Form>
            <Intro>SIGN IN</Intro>
            <Inputs placeholder="Email" />
            <Inputs placeholder="Password" />
            <Button>Submit</Button>
          </Form>
          <Text>SignUn if you dont have an account with Us</Text>
        </Card>
      </Container>
    </div>
  );
};

export default LogIn;

const Button = style.button`
font-weight: 600;
margin-top: 10px;
padding: 15px 30px;
border-radius: 5px;
border: none;
background: #65accf;
color: white;
:hover{
  transform: scale(1.03);
  cursor: pointer;
  background: grey;
}
`;
const Intro = style.div`
font-size: 50px;
font-weight: 700;
color: #65accf;
// font-Family: poppins;
`;
const Text = style.div``;
const Inputs = style.input`

display: block;
margin-top: 20px;
padding: 10px;
border-radius: 5px;
width: 350px;

`;
const Form = style.div`
width: 100%;
height: 75%;
// background: grey;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`;

const Card = style.div`
margin-top: 90px;
width: 600px;
height: 400px;
background: white;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border: silver solid 5px;
display: flex;
flex-direction: column;
align-items: center;
`;
const Container = style.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
