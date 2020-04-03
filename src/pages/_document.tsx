import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { STATIC_FOLDER } from '@constants/env';

export default class extends Document<{ locale: string }> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const documentProps = await Document.getInitialProps(ctx);
    const { renderPage, req } = ctx;
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    return {
      ...documentProps,
      ...page,
      locale: req.locale,
      styles: (
        <>
          {documentProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <meta name="theme-color" content="#78d4e6" />
          <link rel="manifest" href={`${STATIC_FOLDER}/manifest.json`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${STATIC_FOLDER}/images/icon/icon-180.png`} />
          <link rel="shortcut icon" href={`${STATIC_FOLDER}/images/icon/favicon.ico`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
