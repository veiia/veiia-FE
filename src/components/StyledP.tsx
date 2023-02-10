import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BackgroudProps {
  children?: ReactNode;
}

const Backgroud: React.FC<BackgroudProps> = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

const StyledP = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
  line-height: 45px;
`;

export default Backgroud;
