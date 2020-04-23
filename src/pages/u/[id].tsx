import * as React from 'react';
import { NextPage } from 'next';
import { withRouter, SingletonRouter } from 'next/router';
import { WithTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import Layout from '@components/organisms/Layout';
import { SITE_IMAGE } from '@constants/env';
import { /*i18n, Link, */ withTranslation } from '@server/i18n';
import Header from '@components/organisms/Header';
import { withAuth } from 'src/hoc/withAuth';

interface UserPageProps extends WithTranslation {
  router: SingletonRouter;
  t: TFunction;
  counter: number;
  client: string;
}

interface UserPageInitialProps {
  namespacesRequired: string[];
}

const UserPage: NextPage<UserPageProps, UserPageInitialProps> = (/*props: IndexProps*/) => {
  // const { t } = props;
  const headProps = {
    title: 'Index',
    description: 'User Page',
    image: SITE_IMAGE,
  };

  return (
    <Layout>
      <Header text="title" />
      <h1>{headProps.title}</h1>
    </Layout>
  );
};

UserPage.getInitialProps = async (): Promise<UserPageInitialProps> => {
  return { namespacesRequired: ['common'] };
};

export default withAuth()(withRouter(withTranslation('common')(UserPage)));
