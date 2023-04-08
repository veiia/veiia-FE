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
  background-color: #111111 !important;
  .ant-input {
    background-color: #111111;
    color: white;
  }
  width: 100%;
  height: 40px;
  border-radius: 2px;
  border: none;
  outline: 1px solid #333;
  background-color: black;
  &:disabled {
    background-color: #111111;
    outline: 1px solid #333;
  }
  &:hover {
    outline: 1px solid #333;
  }
  &:hover:disabled {
    outline: 1px solid #333;
  }
  &:focus {
    outline: 1px solid #ffffff !important;
  }
`;
export default CustomInput;
