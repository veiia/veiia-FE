import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const CustomSearch = () => {
  return <StyledCustomSearch placeholder="Введите название сайта" onSearch={onSearch} />;
};

const StyledCustomSearch = styled(Search)`
  max-width: 300px;
  margin-bottom: 20px;
`;

export default CustomSearch;
