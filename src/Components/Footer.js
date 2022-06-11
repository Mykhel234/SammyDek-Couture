import React from "react";
import style from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Gold></Gold>

      <Wrapper>
        <First>
          <div>FrontLine</div>
          <p>
            You can reach via our social network handles and our hotlines. feel
            free to contact us anytime anyday. we will love to hear from you.
          </p>
          <p>You can reach via our social network handles and our hotlines.</p>
        </First>
        <First>
          <div>Contact Infos</div>
          <p>
            You can reach via our social network handles and our hotlines. feel
            free to contact us anytime anyday. we will love to hear from you.
          </p>
          <p>You can reach via our social network handles and our hotlines.</p>
        </First>
        <First>
          <div>Unique Areas</div>
          <p>
            You can reach via our social network handles and our hotlines. feel
            free to contact us anytime anyday. we will love to hear from you.
          </p>
          <p>You can reach via our social network handles and our hotlines.</p>
        </First>
        <First>
          <div>Updates</div>
          <p>
            You can reach via our social network handles and our hotlines. feel
            free to contact us anytime anyday. we will love to hear from you.
          </p>
          <p>You can reach via our social network handles and our hotlines.</p>
        </First>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = style.div`
width: 100%;
// height: 400px;
display: flex;
flex-direction: column;
background: black;
align-items: center;
padding: 70px 0;
`;

const Gold = style.div`
width: 100%;
background: #72655F;
height: 70px;

`;
const Wrapper = style.div`
width: 90%;
display: flex;
justify-content space-around;
flex-wrap: wrap;
`;
const First = style.div`
width: 330px;
color: white;
// background: blue;
opacity: 0.8;
height: 260px;
div{
    margin-top: 70px;
    font-size: 35px;
};
p{

}
// display: flex;
// flex-direction: column;
// align-items: center;
`;
