import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type MenuItem = {
  key: string;
  link: string;
  label: string;
};

interface MenuProps {
  items: MenuItem[];
  defaultSelectedKey?: string;
}

const Menu: FC<MenuProps> = ({ items, defaultSelectedKey }) => {
  const [innerSelection, setInnerSelection] = useState<string | undefined>(defaultSelectedKey);

  return (
    <Container>
      {items.map(({ key, link, label }) => (
        <StyledLink to={link} key={key} $selected={key === innerSelection} onClick={() => setInnerSelection(key)}>
          {label}
        </StyledLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fix-content;

  border-radius: 2px;
`;

const StyledLink = styled(Link)<{
  $selected: boolean;
}>`
  display: block;

  width: 100%;

  text-align: center;
  padding: 10px;
  font-size: 20px;
  line-height: 20px;
  background-color: #000000;
  color: #787878;
  user-select: none;
  border: 1px solid #333;

  ${({ $selected }) =>
    $selected &&
    css`
      outline: 1px solid #ffffff;
      color: #ffffff;
    `}

  &:focus {
    outline: 1px solid #ffffff;
  }

  &:hover {
    color: #ffffff;
  }
`;

export default Menu;
