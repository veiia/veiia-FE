import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SitesContainerProps {
  children?: ReactNode;
}

const SitesContainer: React.FC<SitesContainerProps> = ({ children }) => {
  return <StyledSitesContainer>{children}</StyledSitesContainer>;
};

const StyledSitesContainer = styled.div`
  margin: 0 auto;
  width: 1250px;
  background-color: #6da9a5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px 3px rgba(0, 0, 0, 0.18);
`;

export default SitesContainer;
