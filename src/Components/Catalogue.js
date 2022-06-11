import React from "react";
import style from "styled-components";
import { Link } from "react-router-dom";

const Catalogue = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Heading>OUR CATALOGUE</Heading>
          <Wrap>
            <One>
              <Holding>
                <Hold>
                  <Male>MALE COLLECTIONS</Male>
                  <Pictures>
                    <Pix src="/Guys/Guy1.jpg" />
                    <Pix src="/Guys/Guy2.jpg" />
                    <Pix src="/Guys/Guy3.jpg" />
                    <More to="/Male">...see more</More>
                  </Pictures>
                </Hold>
                <Hold>
                  <Female>FEMALE COLLECTIONS</Female>
                  <Pictures>
                    <Pix src="/Girls/Girl1.jpg" />
                    <Pix src="/Girls/Girl2.jpg" />
                    <Pix src="/Girls/Girl3.jpg" />
                    <More to="/Female">...see more</More>
                  </Pictures>
                </Hold>
              </Holding>
            </One>
            <Two>
              <Holding>
                <Hold>
                  <Couples>COUPLES DESIGNS</Couples>
                  <Pictures>
                    <Pix src="/Couples/Couple1.jpg" />
                    <Pix src="/Couples/Couple2.jpg" />
                    <Pix src="/Couples/Couple3.jpg" />
                    <More to="/Couples">...see more</More>
                  </Pictures>
                </Hold>
                <Hold>
                  <Kiddies>KIDDIES SPECIAL</Kiddies>
                  <Pictures>
                    <Pix src="/Kids/Baby3.jpg" />
                    <Pix src="/Kids/kid1.jpg" />
                    <Pix src="/Kids/Baby4.jpg" />
                  </Pictures>
                </Hold>
              </Holding>
            </Two>
          </Wrap>
        </Holder>
      </Container>
    </div>
  );
};

export default Catalogue;

const Wrap = style.div`
width: 90%;
`;
const Couples = style.div`
font-size: 20px;
font-weight: 500;
color: silver;
`;
const Kiddies = style.div`
font-size: 20px;
font-weight: 500;
color: silver;
`;
const One = style.div``;
const Two = style.div``;
const More = style(Link)`
text-decoration: none;
color: black;
font-weight: 500;
width: 100%;
display: flex;
justify-content: flex-end;
font-size: 20px;
color: silver;
`;

const Hold = style.div`
width: 48%;
// background: grey;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`;

const Pictures = style.div``;
const Holding = style.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

`;
const Female = style.div`
font-size: 20px;
font-weight: 500;
color: silver;
`;
const Pix = style.img`
margin-top: 30px;
margin-left: 20px;
width: 150px;
height: 250px;
background: white;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
object-fit: contain: contain;
`;

const Male = style.div`
font-size: 20px;
font-weight: 500;
color: silver;
`;

const Heading = style.div`
font-size: 35px;
font-weight: 700;
margin-top: 50px;
color: silver;
`;

const Holder = style.div`
width: 100%;
// height: 100vh;
// background: #6C6C6C;
display: flex;
flex-direction: column;
align-items: center;
// margin-bottom: 50px;
`;

const Container = style.div`
width: 100%;
// height: 100%;
min-height: calc(100vh - 80px);
// position: relative;
background: #44414C;
padding-bottom: 30px;
`;

// const Background = style.div`
// width: 100%;
// height: 700px;
// background: url("/photos/Natasha.jpg");
// object-fit: contain;
// // display: block;
// // padding-top: 80px;
// `;

const Title = style.div`
font-size: 50px;
font-weight: 700;
font-Family: poppins;
color: white;
`;
const Description = style.div`
margin: 8px 0;
font-size: 18px;
width: 700px;
font-Family: poppins;
opacity: 0.7;
// background: blue;
`;

const Second = style.div`
margin-top: 20px;
width: 100%;
// background: silver;

// display: flex;
`;
const Vision1 = style.div`
margin-top: 20px;
`;
const Vision = style.div`

// margin-right: 20px;
// height: 70%;

`;
const SubTitle1 = style.div`
font-size: 30px;
font-weight: 700;
font-Family: poppins;
`;
const SubTitle = style.div`
font-size: 30px;
font-weight: 700;
font-Family: poppins;
`;
const Text1 = style.div`
font-size: 18px;
width: 700px;
font-Family: poppins;
opacity: 0.7;
margin-bottom: 20px;
`;
const Text = style.div`
font-size: 18px;
width: 700px;
font-Family: poppins;
opacity: 0.7;
`;
const Button = style.button`
font-weight: 600;
border: 3px solid;
padding: 10px 30px;
border-radius: 5px;
text-decoration: none;
outline: none;
transition: all 350ms;
transforrm: scale(1);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background: #E1E2E4;
:hover{
    transform: scale(1.03);
    cursor: pointer;
    background: silver;
}
`;
