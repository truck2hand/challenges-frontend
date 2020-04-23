import * as React from 'react';
import styled, { css } from 'styled-components';
// import Link from 'next/link';

const ButtonStyles = css`
  background: #000000;
  border: 1px solid #000000;
  color: #fff;
  border-radius: 3px;
  font-size: 16px;
  display: block;
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  border: 1px solid transparent;
  transition: all 0.3s ease-out;
  cursor: pointer;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
`;

const ButtonWrapper = styled('button')`
  ${ButtonStyles}

  &:focus {
    outline: none;
  }
`;

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return <ButtonWrapper {...props}>{props?.children}</ButtonWrapper>;
};
