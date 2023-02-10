import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BackgroudProps {
  children?: ReactNode;
}

const Backgroud: React.FC<BackgroudProps> = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>;
};

const StyledBackground = styled.div`
  height: 100vh;
  background-color: #a3ccc9;
`;

export default Backgroud;
