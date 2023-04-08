import React from 'react';
import styled from 'styled-components';
import { DividingLine, StyledP } from '.';

const NotEditebleInformation = () => {
  return (
    <StyledNotEditebleInformation>
      <StyledP>Name:</StyledP>
      <DividingLine />
      <StyledP>Email:</StyledP>
      <DividingLine />
      <StyledP>Password:</StyledP>
    </StyledNotEditebleInformation>
  );
};

const StyledNotEditebleInformation = styled.div`
  width: 470px;
`;

export default NotEditebleInformation;
