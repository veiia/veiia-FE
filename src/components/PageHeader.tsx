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
      <StyledImage src={veiiaLogo} alt="Veiia" />
      <h1 style={{ color: 'white' }}>Welcome to Veiia</h1>
      <p style={{ color: 'white' }}>{text}</p>
      {children}
    </StyledHeader>
  );
};

const StyledImage = styled.img`
  border-radius: 50%;
  height: 100px;
`;

const StyledHeader = styled.header`
  width: 500px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default PageHeader;
