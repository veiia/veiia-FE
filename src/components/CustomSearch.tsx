import { Input } from 'antd';

import styled from 'styled-components';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const CustomSearch = () => {
  return <StyledCustomSearch placeholder="Enter the name of the site" onSearch={onSearch} />;
};

const StyledCustomSearch = styled(Search)`
  max-width: 300px;
  margin-bottom: 20px;

  background-color: black;
  &:active {
    border: 1px solid #ffffff;
  }
`;

export default CustomSearch;
