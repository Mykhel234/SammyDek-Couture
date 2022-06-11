import React from "react";
import style from "styled-components";

const Training = () => {
  return (
    <Container>
      <Wrapper>
        <Image>
          <img src={"/photos/SammDek.png"} />
        </Image>
        <Contents>
          <Title>TRAININGS AND MENTORSHIP</Title>
          <Text>
            We also train upcoming Designers and offer mentorship to new-bees in
            the Industry based on international standards. Our Trainings ranges
            from 3months, 6months to One year depending on the target and the
            aspects to be covered.
            <p>
              We leverage on our network to deploy our students to different
              fashion agencies for intership and for jobs. This aids their
              exposure and solidify their learning.{" "}
              <strong>Sammy Dek Couture</strong> is just the place for you
            </p>
            <p>
              Come and get your hands busy and attain the peak that you crave
              for. Our Services are Unique and very affordable. Just click here
              and lets get started!
            </p>
          </Text>
          <Button>Reach Us</Button>
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default Training;

const Container = style.div`
width: 100%;
height: 100vh;
background: #CEC8DE;
background-size: contain;
display: flex;
justify-content: center;
align-items: center;

`;
const Wrapper = style.div`
width: 90%;
// height: 100vh;
// background: pink;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`;
const Image = style.div`
background: black;
padding-top: 50px;

img{
    width: 550px;
    height: 580px;
    object-fit: Contain;
    
}
`;
const Title = style.div`
font-size: 30px;
font-weight: 700;
margin-top: 80px;
font-family: poppins;
`;
const Text = style.p``;
const Contents = style.div`
width: 600px;
height: 600px;
// color: white;
`;
const Button = style.button`
font-weight: 600;
border: 3px solid;
padding: 15px 30px;
border-radius: 5px;
text-decoration: none;
outline: none;
transition: all 350ms;
transforrm: scale(1);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-decoration: none;
// color: white;
opacity: 0.8;
margin: 20px;

:hover{
    transform: scale(1.03);
    cursor: pointer;
    background: white;
}
`;
