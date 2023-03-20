import React from 'react';
import { Button, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';

export enum CustomButtonStyle {
  LIGHT_GRAY,
  DARK_GRAY,
  WHITE,
  RED,
  BLACK,
}

interface CustomButtonProps extends ButtonProps {
  styleType?: CustomButtonStyle;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  size = 'large',
  onClick,
  text,
  disabled,
  styleType = CustomButtonStyle.DARK_GRAY,
  ...buttonProps
}) => {
  return (
    <StyledButton size={size} $styleType={styleType} {...buttonProps} onClick={onClick} disabled={disabled}>
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
      case CustomButtonStyle.RED:
        return css`
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 18px;

          background-color: #ff0f17;
          border-radius: 2px;
          color: white;
          height: 30px;
          width: 210px;
          &:hover {
            outline: 1px solid #ff0f17;
            background-color: #000000;
            color: #ff0f17;
          }
          &:focus {
            outline: 1px solid #ff0f17;
            background-color: #000000;
            color: #ff0f17;
          }
          &:active {
            color: #ff0f17;
            outline: 1px solid #ff0f17;
            background: #000000;
          }
        `;
      case CustomButtonStyle.WHITE:
        return css`
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 18px;
          height: 30px;
          width: 70px;
          background-color: #ffffff;
          color: #000000;
          border-radius: 2px;
          &:hover {
            background-color: #000000;
            color: #ffffff;
            outline: 1px solid #ffffff;
            border: none;
          }
          &:focus {
            background-color: #000000;
            color: #ffffff;
            outline: 1px solid #ffffff;
            border: none;
          }
          &:disabled {
            outline: 1px solid #333;
            background-color: #111111;
            color: #8d8d8d;
          }
          &:disabled:hover {
            outline: 1px solid #333;
            background-color: #111111;
            color: #8d8d8d;
          }
        `;
      case CustomButtonStyle.BLACK:
        return css`
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 18px;

          height: 30px;
          width: 70px;

          outline: 1px solid #333;
          background-color: #000000;
          color: #ffffff;
          border-radius: 2px;
          &:hover {
            background-color: #000000;
            color: #ffffff;
            outline: 1px solid #ffffff;
            border: none;
          }
          &:focus {
            background-color: #000000;
            color: #ffffff;
            outline: 1px solid #ffffff;
            border: none;
          }
          &:disabled {
            outline: 1px solid #333;
            background-color: #111111;
            color: #8d8d8d;
          }
          &:disabled:hover {
            outline: 1px solid #333;
            background-color: #111111;
            color: #8d8d8d;
          }
        `;
    }
  }}
`;
export default CustomButton;
