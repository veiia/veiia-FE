import { ProjectOutlined, BuildOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps, Menu } from 'antd';
import React, { FC, useMemo, useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CustomButton, { CustomButtonStyle } from './CustomButton';
import UserMenu from './UserMenu';
const veiiaLogo = require('../pictures/veiia.png');

type ItemsType = 'main' | 'project';

interface LayoutProps {
  type?: ItemsType;
}

const Layout: FC<LayoutProps> = ({ type = 'main' }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  const items = useMemo(() => {
    switch (type) {
      case 'main':
        return [
          {
            label: 'Overview',
            key: '/overview',
            icon: <ProjectOutlined />,
            onClick: () => navigate('/overview'),
          },
          {
            label: 'Activity',
            key: '/activity',
            icon: <BuildOutlined />,
            onClick: () => navigate('/activity'),
          },
          {
            label: 'Usage',
            key: '/usage',
            icon: <UserAddOutlined />,
            onClick: () => navigate('/usage'),
          },
          {
            label: 'Settings',
            key: '/settings/general',
            icon: <SettingOutlined />,
            onClick: () => navigate('/settings/general'),
          },
        ];
      case 'project':
        return [
          {
            label: 'Project',
            key: '/project',

            onClick: () => navigate('/overview/project'),
          },
          {
            label: 'Deployments',
            key: '/deployments',

            onClick: () => navigate('/overview/deployments'),
          },
          {
            label: 'Settings',
            key: '/project-settings',

            onClick: () => navigate('/overview/project-settings'),
          },
        ];
    }
  }, [navigate, type]);

  return (
    <>
      <StyledNavBar>
        <BriefInformation>
          <StyledImage src={veiiaLogo} />
          <p style={{ color: '#ffffff', fontSize: '20px', margin: '0' }}>userMail@mail.com</p>
        </BriefInformation>

        <UserMenuContainer>
          <CustomButton styleType={CustomButtonStyle.BLACK} text="Help" />
          <CustomButton styleType={CustomButtonStyle.BLACK} text="Feedback" style={{ width: '100px' }} />
          <CustomButton styleType={CustomButtonStyle.BLACK} text="Docs" />
          <UserMenu />
        </UserMenuContainer>
      </StyledNavBar>
      <StyledMenu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
};

const BriefInformation = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const UserMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  height: 40px;
`;

export const StyledMenu = styled(Menu)`
  position: sticky;
  top: 0;

  width: 100%;

  border-bottom: 1px solid #333;
  z-index: 2;
  padding: 5px;
  background-color: #000000;
  --ant-primary-color: #e6e6e6;
  font-weight: 500;
  user-select: none;
  color: #e6e6e6;
`;

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: auto;
  padding: 10px 25px 0 25px;
  background-color: #000000;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding-top: 32px;
`;

export default Layout;
