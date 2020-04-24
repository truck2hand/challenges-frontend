import * as React from 'react';
import { useState } from 'react';
import InputText from '@components/atoms/InputText';
import { Button } from '@components/atoms/Button';
import Head from 'next/head';
// import Link from 'next/link';

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
      <Head>
        <title>Log in</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <span>Log in detail</span>
        <InputText type="text" placeholder="Username or Email" value={username} onChange={e => setUsername(e.target.value)} />
        <InputText type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button color="inverse" type="submit">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
