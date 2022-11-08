import { Input, InputProps } from 'antd';
import styled from 'styled-components';

const CustomInput: React.FC<InputProps> = ({ ...inputProps }) => {
  return <StyledInput {...inputProps} />;
};

const StyledInput = styled(Input)`
  --ant-primary-color-outline: #18576a;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
`;
export default CustomInput;
