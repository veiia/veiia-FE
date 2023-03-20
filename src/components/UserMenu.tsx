import React, { useContext } from 'react';
import { MenuProps, Switch } from 'antd';
import { Dropdown } from 'antd';
import styled from 'styled-components';
import { AppContext } from '../App';
import CustomCascader from './CustomCascader';

const userIcon = require('../pictures/user_negate.png');

const UserMenu: React.FC = () => {
  const { initialUserName } = useContext(AppContext);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <a style={{ margin: '0' }} href="">
          {initialUserName}
        </a>
      ),
      disabled: true,
      key: '0',
    },
    {
      label: <a href="/overview">Overview</a>,
      key: '1',
    },
    {
      label: <a href="/settings/general">Settings</a>,
      key: '2',
    },
    {
      label: <a href="/">Log Out</a>,
      key: '3',
    },
  ];

  return (
    <StyledDropDown menu={{ items }} trigger={['click']} placement="bottomRight">
      <a>
        <StyledUserAvatar src={userIcon} alt="userIcon" />
      </a>
    </StyledDropDown>
  );
};

const StyledDropDown = styled(Dropdown)``;

const StyledUserAvatar = styled.img`
  height: 40px;
  width: 100%;

  border-radius: 50%;
`;

export default UserMenu;
