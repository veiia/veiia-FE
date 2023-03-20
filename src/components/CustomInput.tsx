import { Input, InputProps } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface CustomInputProps extends InputProps {
  placeholder?: string;
  prefix?: ReactNode;
  type?: string;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ ...CustomInputProps }) => {
  return <StyledInput {...CustomInputProps} />;
};

const StyledInput = styled(Input)`
  --ant-primary-color-outline: #333;

  width: 100%;
  height: 40px;
  border-radius: 2px;
  color: white;
  border-color: #333;
  background-color: black;
  &:disabled {
    background-color: #111111;
    border-color: #333;
  }
  &:hover {
    border-color: #333;
  }
  &:hover:disabled {
    border-color: #333;
  }
  &:focus {
    border: 1px solid #ffffff;
  }
`;
export default CustomInput;
