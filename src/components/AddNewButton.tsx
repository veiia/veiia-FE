import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import styled from 'styled-components';

const items: MenuProps['items'] = [
  {
    label: <a href="/create-project">Project</a>,
    key: '0',
  },
  {
    label: <a href="">Domain</a>,
    key: '1',
  },
  // {
  //   type: 'divider',
  // },
];

const App: React.FC = () => (
  <StyledDropdown menu={{ items }} trigger={['click']}>
    <Space>Add New...</Space>
  </StyledDropdown>
);

const StyledDropdown = styled(Dropdown)`
  background-color: white;
  border-radius: 2px;
  height: 40px;
  width: 120px;
  align-items: center;
  padding: 20px;
  user-select: none;
  cursor: pointer;
`;

export default App;
