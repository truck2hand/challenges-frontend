import * as React from 'react';
import { NextPage } from 'next';
import { withRouter, SingletonRouter } from 'next/router';
import { WithTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import Layout from '@components/organisms/Layout';
import { SITE_IMAGE } from '@constants/env';
import { /*i18n, Link, */ withTranslation } from '@server/i18n';
import LoginForm from '@components/organisms/LoginForm';
import { Container } from '@components/organisms/Container';
import Title from '@components/atoms/Title';
import Text from '@components/atoms/Text';

interface SigninPageProps extends WithTranslation {
  router: SingletonRouter;
  t: TFunction;
  counter: number;
  client: string;
}

interface SigninPageInitialProps {
  namespacesRequired: string[];
}

const SigninPage: NextPage<SigninPageProps, SigninPageInitialProps> = (/*props: IndexProps*/) => {
  // const { t } = props;
  const headProps = {
    title: 'Log in',
    description: 'User Page',
    image: SITE_IMAGE,
  };

  const handleSubmit = (username, password) => {
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <Layout>
      <Container>
        <Title>{headProps.title}</Title>
        <Text>Login with your email, phone, username or social media</Text>
        <LoginForm onSubmit={handleSubmit} />
      </Container>
    </Layout>
  );
};

SigninPage.getInitialProps = async (): Promise<SigninPageInitialProps> => {
  return { namespacesRequired: ['common'] };
};

export default withRouter(withTranslation('common')(SigninPage));
