import { Input, InputProps } from 'antd';
import { ReactNode} from 'react';
import styled from 'styled-components';

interface CustomInputProps extends InputProps{
  placeholder?: string,
  prefix?: ReactNode,
  type?: string,
}

const CustomInput: React.FC<CustomInputProps> = ({ ...CustomInputProps }) => {
  
  return <StyledInput {...CustomInputProps}/>;
};

const StyledInput = styled(Input)`
  --ant-primary-color-outline: #18576a;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
`;
export default CustomInput;
