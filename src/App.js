import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Particles from "react-particles-js";

import bg from "./images/bg.jpg";
import logo from "./images/logo.png";
import Arabia from "./fonts/arabian.ttf";
import ParticlesConfig from "./constants/particles.json";

import Form from "./components/form";
import Icons from "./components/icons";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: arabia;
  src: url(${Arabia}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
body {
    margin: 0;
    padding: 0;
    overflow:hidden;
    height:100%;
    box-sizing: border-sizing;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
  
}
`;


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <GlobalStyle />
        <ParticleBG params={ParticlesConfig} />
        <Wrapper>
          <Container>
            <Logo src={logo} />
            <ComingSoon>Coming Soon</ComingSoon>
            <Form />
            <SocialIcons>
              <Icons />
            </SocialIcons>
          </Container>    
        </Wrapper>
      </React.Fragment>
    );
  }
}

const ParticleBG = styled(Particles)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

const Logo = styled.img`
  width: 500px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ComingSoon = styled.h1`
  font-family: arabia;
  color: #f8a96f;
  text-align: center;
  font-size: 72px;
  margin-top: 0px;
  user-select: none;
  
  
  
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 250%;
  }
`;

const SocialIcons = styled.div`
 
  display: flex;
  position:absolute;
  bottom:10px;

  @media (max-width: 768px) {
    width: 95vw;
    display: flex;
    justify-content: space-evenly;
  }
`;
