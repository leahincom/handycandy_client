import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang='ko-KR'>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta charSet='UTF-8' />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css'
          />
          <Script src='https://cdn.jsdelivr.net/npm/pathseg@1.2.0/pathseg.min.js' />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
