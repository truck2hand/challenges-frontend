import App from 'next/app';
import React from 'react';
import { appWithTranslation } from '@server/i18n';
import GlobalStyle from '@components/GlobalStyle/GlobalStyle';

type AppProps = {};

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default appWithTranslation(MyApp);
