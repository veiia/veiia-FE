import { Input } from 'antd';

import styled from 'styled-components';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const CustomSearch = () => {
  return <StyledCustomSearch placeholder="Введите название сайта" onSearch={onSearch} />;
};

const StyledCustomSearch = styled(Search)`
  max-width: 300px;
  margin-bottom: 20px;
`;

export default CustomSearch;
