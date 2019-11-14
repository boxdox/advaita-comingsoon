import React from "react";
import styled from "styled-components";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";

export default function Icons(props) {
  return (
    <React.Fragment>
      <Icon src={Facebook} />
      <Icon src={Twitter} />
      <Icon src={Instagram} />
    </React.Fragment>
  );
}

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  filter: drop-shadow(0 0 10px #fea999);
  cursor: pointer;
  @media (max-width:768px){
    padding-left:26%;
  }
  @media (max-width:320px){
    padding-left:22%;
  }
`;
