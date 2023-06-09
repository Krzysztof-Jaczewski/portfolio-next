import Head from 'next/head';
import { FC } from 'react';

interface Props {
    title: string;
    description: string;
}

const SeoData: FC<Props> = ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} key='title' />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
    </Head>
);

export default SeoData;
