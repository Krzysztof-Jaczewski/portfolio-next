import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='icon' href='/logoEye.png' />
                <meta property='og:image' content='/logoEye.png' />
                <meta property='og:type' content='website' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
