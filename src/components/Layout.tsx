import {
  ProjectOutlined,
  BuildOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuProps, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Background } from '.';

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };
  const items: MenuProps['items'] = [
    {
      label: 'Сайты',
      key: '/sites',
      icon: <ProjectOutlined />,
      onClick: () => navigate('/sites'),
    },
    {
      label: 'Билды',
      key: '/builds',
      icon: <BuildOutlined />,
      onClick: () => navigate('/builds'),
    },
    {
      label: 'Участники',
      key: '/members',
      icon: <UserAddOutlined />,
      onClick: () => navigate('/members'),
    },
    {
      label: 'Настройки Группы',
      key: '/group-settings',
      icon: <UsergroupDeleteOutlined />,
      onClick: () => navigate('/group-settings'),
    },
    {
      label: 'Профиль',
      key: '/profile',
      icon: <UserOutlined />,
      children: [
        {
          label: 'Настройки',
          key: '/settings',
          onClick: () => navigate('/settings'),
        },
        {
          label: 'Помощь',
          key: '/help',
          onClick: () => navigate('/help'),
        },
        {
          label: 'Выйти',
          key: 'exit',
        },
      ],
    },
  ];

  return (
    <Background>
      <StyledNavBar>
        <StyledMenu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </StyledNavBar>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Background>
  );
};

const StyledMenu = styled(Menu)`
  gap: 10px;
  border-radius: 0 0 10px 10px;
  justify-content: center;
  align-items: center;
  background-color: #6da9a5;
  --ant-primary-color: #000000;
  font-weight: 500;
  user-select: none;
`;

const StyledNavBar = styled.nav`
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  background-color: red;
`;

export default Layout;
