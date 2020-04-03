import * as React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { withRouter } from 'next/router';
import { Layout } from '@components/Layout';
import { SITE_IMAGE, SITE_NAME } from '@constants/env';
import { /*i18n, Link, */ withTranslation } from '@server/i18n';
import { IndexProps, IndexInitialProps } from '../interfaces';
import Header from '@components/Header';

const Index: NextPage<IndexProps, IndexInitialProps> = (/*props: IndexProps*/) => {
  // const { t } = props;
  const headProps = {
    title: 'Index',
    description: 'Index Page',
    image: SITE_IMAGE,
  };

  return (
    <Layout>
      <Head>
        <title>{headProps.title}</title>
        <meta name="description" content={headProps.description} />
        {/* Schema.org for Google */}
        <meta itemProp="name" content={headProps.title} />
        <meta itemProp="description" content={headProps.description} />
        <meta itemProp="image" content={headProps.image} />
        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
        <meta property="og:title" content={headProps.title} />
        <meta property="og:description" content={headProps.description} />
        <meta property="og:image" content={headProps.image} />
        <meta property="og:locale" content="ja" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={headProps.title} />
        <meta name="twitter:description" content={headProps.description} />
        <meta name="twitter:image" content={headProps.image} />
        {/* <link rel="canonical" href="" /> */}
      </Head>
      <Header text="title" />
    </Layout>
  );
};

Index.getInitialProps = async (): Promise<IndexInitialProps> => {
  return { namespacesRequired: ['common'] };
};

export default withRouter(withTranslation('common')(Index));
