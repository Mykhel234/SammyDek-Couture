import React from "react";
import style from "styled-components";

const Intergrity = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <div>
            We Offer you Beautiful and Outstanding Outfits for all Events
          </div>
          <p>
            Give us a call for that perfect look for every event: be it wedding,
            graduation, convocation, dinner, house opening party, child
            dedications, wedding anniversary, Birthday party or just an official
            gathering that you want to make statement with your outfit.{" "}
            <strong>Sammy Dek Couture</strong> is the name for you
          </p>
          <p>We are just a call away. Do well to reach anytime and anyday.</p>

          <Button>Reach Us</Button>
        </Box>

        <Box2>
          <img src={"/photos/Intergrity2.jpg"} />
        </Box2>
        <Box3>
          <img src={"/photos/Babes1.jpg"} />
        </Box3>
      </Wrapper>
    </Container>
  );
};

export default Intergrity;

const Container = style.div`
width: 100%;
// height: 500px;
display: flex;
justify-content: center;
align-items: center;
padding: 70px 0;
// background: pink;
`;
const Wrapper = style.div`
width: 90%;
// height: 400px;
display: flex;
justify-content: space-around;
align-items: center;
// background: lavender;
flex-wrap: wrap;
`;
const Box = style.div`
width: 400px;
height: 400px;
// background: red;
// display: flex;
// align-items: center;
// justify-content: center;
flex-direction: column;
div{
  font-size: 20px;
  margin-top: 20px;
  font-weight: 700;
  line-height: 25px;
};
`;

// const Boxes = style.div`
// display: flex;
// width: 850px;
// // background: blue;
// justify-content: space-between;
// flex-wrap: wrap;
// `;
const Box2 = style.div`
width: 400px;
height: 400px;
margin-bottom: 20px;
img{
  width: 400px;
  height: 400px;
  object-fit: cover;
`;
const Box3 = style.div`
width: 400px;
height: 400px;
img{
  width: 400px;
  height: 400px;
  object-fit: cover;
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
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-decoration: none;
color: black;

:hover{
    transform: scale(1.03);
    cursor: pointer;
    background: transparent;
}
`;
