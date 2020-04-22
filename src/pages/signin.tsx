import * as React from 'react';
import { NextPage } from 'next';
import { withRouter, SingletonRouter } from 'next/router';
import { WithTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import Layout from '@components/Layout';
import { SITE_IMAGE } from '@constants/env';
import { /*i18n, Link, */ withTranslation } from '@server/i18n';

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
    title: 'Index',
    description: 'User Page',
    image: SITE_IMAGE,
  };

  return (
    <Layout>
      <h1>{headProps.title}</h1>
    </Layout>
  );
};

SigninPage.getInitialProps = async (): Promise<SigninPageInitialProps> => {
  return { namespacesRequired: ['common'] };
};

export default withRouter(withTranslation('common')(SigninPage));
