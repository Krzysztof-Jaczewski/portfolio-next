import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='icon' href='/logo.png' />
                <meta property='og:image' content='/logo.png' />
                <meta property='og:type' content='website' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
