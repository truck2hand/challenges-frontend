import * as React from 'react';
import styled from 'styled-components';
// import Link from 'next/link';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: 'text' | 'password';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputLabel = styled.label`
  color: #424242;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Input = styled.input`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  height: 40px;
  padding: 0 35px 0 10px;
  margin-bottom: 2px;
  outline: none;
`;

const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  const { label, ...rest } = props;
  return (
    <React.Fragment>
      {label && label.length > 0 && <InputLabel>{label}</InputLabel>}
      <Input {...rest} aria-label={label || rest.placeholder}></Input>
    </React.Fragment>
  );
};

export default InputText;
