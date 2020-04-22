import * as React from 'react';
import nextCookie from 'next-cookies';
import { NextComponentType, NextPageContext } from 'next';
import Router from 'next/router';

type WithAuthOptions = {
  redirectWhenUnauthorized: boolean;
};

export function withAuth<P, IP, C extends NextPageContext>(options: WithAuthOptions = { redirectWhenUnauthorized: false }) {
  const withAuthInner = (PageComponent: NextComponentType<C, IP, P>) => {
    const Wrapper: NextComponentType<C, IP, P> = props => {
      return <PageComponent {...props} />;
    };

    Wrapper.getInitialProps = async ctx => {
      const { token } = nextCookie(ctx);

      const redirectOnError = () => {
        if (process.browser) {
          Router.push('/signin');
        } else {
          ctx.res.writeHead(301, { Location: '/signin' });
          ctx.res.end();
        }
      };

      if (!token && options.redirectWhenUnauthorized) {
        redirectOnError();
        return {} as IP;
      }

      const componentProps = PageComponent.getInitialProps && (await PageComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    };

    return Wrapper;
  };

  return withAuthInner;
}
