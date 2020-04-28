import * as React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light' | 'outline-primary' | 'outline-secondary' | 'outline-light';
}

const styles = (props: ButtonProps & { theme: DefaultTheme }) => {
  if (!props.variant)
    return css`
      background: ${props.theme.buttons.primary.default};
      border: 1px solid ${props.theme.buttons.primary.default};
      color: #fff;
    `;

  if (props.variant.startsWith('outline-')) {
    const variant = props.variant.replace('outline-', '');
    return css`
      background: #fff;
      border: 1px solid ${props.theme.buttons[variant.toString()].default};
      color: ${props.theme.buttons[variant.toString()].default};
    `;
  } else {
    return css`
      background: ${props.theme.buttons[props.variant].default};
      border: 1px solid ${props.theme.buttons[props.variant].default};
      color: #fff;
    `;
  }
};

const ButtonStyles = css`
  ${props => styles(props)};
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

const Button: React.FC<ButtonProps> = props => {
  return <ButtonWrapper {...props}>{props?.children}</ButtonWrapper>;
};

export default Button;
