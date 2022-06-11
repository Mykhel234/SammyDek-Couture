import React from "react";
import style from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <Wrapped>
        <Empty>
          <img src={"/Girls/Girl12.jpg"} />
        </Empty>
        <Contents>
          <Unique>Unique Styles</Unique>
          <From>from</From>
          <Sammy>
            SAMMY DEK <div>COUTURE</div>
          </Sammy>
        </Contents>
      </Wrapped>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = style.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
// height: 100vh;
// #0A1C0C
// #2B2B20
background: #000000;


`;
const Wrapped = style.div`
width: 90%;
margin-top: 80px;
height; 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
// background: green;
flex-wrap: wrap;
`;
const Empty = style.div`
width: 50%;
height: 700px;
// background: white;
display: flex;
justify-content: center;
align-items: center;
img{
  
  width: 600px;
  height: 600px;
  object-fit: cover;
}
`;
const Contents = style.div`
width: 600px;
height: 600px;
// background: pink;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
const Unique = style.div`
font-size: 60px;
// text-align: center;
margin-bottom: 5px;
color: white;
`;
const From = style.div`
width: 100%;
display: flex;
justify-content: center;
font-size: 20px;
margin-top: -10px;
// font-weight: 900;
color: white;
`;
const Sammy = style.div`
width: 80%;
font-size: 60px;
font-weight: 900;
text-align: center;
font-Family: poppins;
border-radius: 10px;
// color: white;
background: white;
div{
  font-size: 45px;
  font-weight: 900;
}
`;
