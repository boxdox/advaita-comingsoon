import React from "react";
import styled from "styled-components";

export default function Form(props) {
  return (
    <React.Fragment>
      <EmailForm>
        <Input type="email" name="email" placeholder="Get Notified via Email" />
        <Submit onClick={() => console.log("Hello")}>Submit</Submit>
      </EmailForm>
    </React.Fragment>
  );
}

const EmailForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px){
   flex-direction:column;
   margin-left:20%;
   width:80%;
   margin-top:20px;
  }
  @media (max-width:320px){
    width:100%;
  }
`;

const Input = styled.input`
  width: 70%;
  background: rgba(156, 60, 68, 0.6);
  border-radius: 10px;
  padding: 10px;
  color: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 20px;
  margin-right: 10px;
  box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.75);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.9);
  }
  @media (max-width:768px){
    text-align:center;

  }
`;

const Submit = styled.button`
  width: 30%;
  border: none;
  font-size: 20px;
  background-color: rgba(54, 54, 54, 0.75);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (max-width:768px){
    margin-top:10px;
    margin-left:20%;
  }
`;
