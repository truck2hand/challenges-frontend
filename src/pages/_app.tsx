import App from 'next/app';
import React from 'react';
import ReactDom from 'react-dom';
import { appWithTranslation } from '@server/i18n';
import GlobalStyle from '@components/global/GlobalStyle/GlobalStyle';
import theme from '@components/global/theme';
import { ThemeProvider } from 'styled-components';

class MyApp extends App {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      const axe = require('react-axe');
      axe(React, ReactDom, 1000);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp);
