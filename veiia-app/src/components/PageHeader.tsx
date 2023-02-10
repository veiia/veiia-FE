import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface PageHeaderProps {
  text: string;
  children?: ReactNode;
}

const veiiaLogo = require('../pictures/veiia.png');

const PageHeader: React.FC<PageHeaderProps> = ({ text, children }) => {
  return (
    <StyledHeader>
      <StyledImage src={veiiaLogo} alt="Верба" />
      <h1>Добро пожаловать в Veiia</h1>
      <p>{text}</p>
      {children}
    </StyledHeader>
  );
};

const StyledImage = styled.img`
  border-radius: 50%;
  height: 100px;
`;

const StyledHeader = styled.header`
  width: 400px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default PageHeader;
