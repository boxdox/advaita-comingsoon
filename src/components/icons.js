import React from "react";
import styled from "styled-components";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";

export default function Icons(props) {
  return (
    <SocialIcons>
      <Icon src={Facebook} />
      <Icon src={Twitter} />
      <Icon src={Instagram} />
    </SocialIcons>
  );
}

const SocialIcons = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  filter: drop-shadow(0 0 10px #fea999);
  cursor: pointer;
`;
