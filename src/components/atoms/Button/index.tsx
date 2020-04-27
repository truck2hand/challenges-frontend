import * as React from 'react';
import styled, { css } from 'styled-components';
import { getColorCode } from '../utils';
// import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string | 'primary' | 'secondary' | 'inverse';
}

const ButtonStyles = css`
  ${(props: { color?: string }) =>
    props?.color === 'inverse'
      ? css`
          background: #fff;
          border: 1px solid #8898aa;
          color: #8898aa;
        `
      : css`
          background: ${(props: { color?: string }) => getColorCode(props.color ?? 'primary')};
          border: 1px solid ${(props: { color?: string }) => getColorCode(props.color ?? 'primary')};
          color: #fff;
        `}
  border-radius: 2px;
  font-size: 16px;
  display: block;
  width: 100%;
  height: 38px;
  letter-spacing: 0;
  line-height: 19px;
  font-size: 14px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
`;

const ButtonWrapper = styled.button`
  ${ButtonStyles}

  &:focus {
    outline: none;
  }
`;

export const Button: React.FC<ButtonProps> = props => {
  return <ButtonWrapper {...props}>{props?.children}</ButtonWrapper>;
};
