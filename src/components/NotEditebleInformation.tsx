import React from 'react';
import styled from 'styled-components';
import { DividingLine, StyledP } from '.';

const NotEditebleInformation = () => {
  return (
    <StyledNotEditebleInformation>
      <StyledP>Имя:</StyledP>
      <DividingLine />
      <StyledP>Email:</StyledP>
      <DividingLine />
      <StyledP>Пароль:</StyledP>
    </StyledNotEditebleInformation>
  );
};

const StyledNotEditebleInformation = styled.div`
  width: 470px;
`;

export default NotEditebleInformation;
