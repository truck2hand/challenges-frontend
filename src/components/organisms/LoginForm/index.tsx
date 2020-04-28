import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import InputText from '@components/atoms/InputText';
import Button from '@components/atoms/Button';
import FormGroup from '@components/atoms/FormControl';
import LinkText from '@components/atoms/LinkText';

const ForgotPasswordLinkText = styled(LinkText)`
  text-align: right;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

interface LoginFormProps {
  username?: string;
  password?: string;
  onSubmit?: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const [username, setUsername] = useState(props?.username ?? '');
  const [password, setPassword] = useState(props?.password ?? '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    props.onSubmit(username, password);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <span>Log in detail</span>
        <FormWrapper>
          <FormGroup>
            <InputText type="text" placeholder="Username or Email" value={username} onChange={e => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <InputText type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <ForgotPasswordLinkText>Forgot Password</ForgotPasswordLinkText>
          </FormGroup>
          <FormGroup>
            <Button variant="outline-light" type="submit">
              Submit
            </Button>
          </FormGroup>
        </FormWrapper>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
