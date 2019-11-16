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
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-sizing;
    background-color: #191114;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAASklEQVQYVwE/AMD/AQEFCf8LCQwAZDAsAJjO0gD5+fcAARoREP/z/gQA/AABAAYBAAD8+fYAAR0QD//7AwUAJgoGANXz9wAO+/sAe+UVaElEZWcAAAAASUVORK5CYII=);
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    @media(max-width: 425px) {
      overflow-y: hidden;
    }
}
`;

export default class App extends React.Component {
  componentDidMount() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ParticleBG params={ParticlesConfig} />
        <Wrapper>
          <Logo src={logo} />
          <ComingSoon>Coming Soon</ComingSoon>
          <Form />
        </Wrapper>
        <SocialIcons>
          <Icons />
        </SocialIcons>
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

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 auto;
  height: 100%;
  width: 500px;
  z-index: 1000;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 500px;
  filter: drop-shadow(0 0 10px #000);
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
  filter: drop-shadow(0 0 100px #000);
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 250%;
  }
`;

const SocialIcons = styled.div`
  text-align: center;
  margin-top: 20px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;
