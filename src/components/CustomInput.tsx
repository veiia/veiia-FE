import { Input, InputProps } from 'antd';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export enum CustomInputStyle {
  GRAY,
  BLACK,
}

interface CustomInputProps extends InputProps {
  placeholder?: string;
  prefix?: ReactNode;
  type?: string;
  disabled?: boolean;
  styleType?: CustomInputStyle;
}

const CustomInput: React.FC<CustomInputProps> = ({ styleType = CustomInputStyle.GRAY, ...CustomInputProps }) => {
  return <StyledInput {...CustomInputProps} $styleType={styleType} />;
};

const StyledInput = styled(Input)<{ $styleType: CustomInputStyle }>`
  width: 100%;
  height: 40px;

  border: none;
  --ant-primary-color-outline: #333;
  outline: 1px solid #333;
  color: #ffffff;

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

  ${({ $styleType }) => {
    switch ($styleType) {
      case CustomInputStyle.BLACK:
        return css`
          background-color: #000000;
        `;
      case CustomInputStyle.GRAY:
        return css`
          background-color: #111111;
        `;
    }
  }}
`;
export default CustomInput;
