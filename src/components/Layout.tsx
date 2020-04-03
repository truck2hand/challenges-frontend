import * as React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC = (props: LayoutProps) => (
  <div id="layout">
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    </Head>
    <main>{props.children}</main>
  </div>
);
