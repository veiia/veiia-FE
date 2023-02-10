import React from 'react';
import { Button, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';

export enum CustomButtonStyle {
  LIGHT_GRAY,
  DARK_GRAY,
}

interface CustomButtonProps extends ButtonProps {
  styleType?: CustomButtonStyle;
  text?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  size = 'large',
  text,
  styleType = CustomButtonStyle.DARK_GRAY,
  ...buttonProps
}) => {
  return (
    <StyledButton size={size} $styleType={styleType} {...buttonProps}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<{
  $styleType: CustomButtonStyle;
}>`
  border-radius: 8px;
  border: none;
  width: 100%;

  ${({ $styleType }) => {
    switch ($styleType) {
      case CustomButtonStyle.LIGHT_GRAY:
        return css`
          background-color: #d2d6db;
          &:hover {
            background-color: #e4e8ec;
            color: black;
          }
          &:focus {
            background-color: #e4e8ec;
            color: black;
          }
        `;
      case CustomButtonStyle.DARK_GRAY:
        return css`
          background-color: #43474b;
          color: white;
          &:hover {
            background-color: #4c5257;
            color: white;
          }
          &:focus {
            background-color: #4c5257;
            color: white;
          }
        `;
    }
  }}
`;
export default CustomButton;
