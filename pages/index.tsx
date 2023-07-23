import type { GetStaticProps, NextPage } from 'next';
import getRepositories from '../modules/getRepositories/getRepositories';
import { RepoType } from 'modules/getRepositories/types';
import { Hero } from 'components/Hero';
import { Layout } from 'components/Layout';
import { Projects } from 'components/Projects';
import { Quote } from 'components/Quote';
import SeoData from 'components/SeoData/SeoData';
import { Skills } from 'components/Skills';

interface Props {
    repos: RepoType;
}

const Home: NextPage<Props> = ({ repos }) => (
    <Layout>
        <SeoData
            title='Portfolio'
            description='Portfolio website to present current skills and projects on github'
        />
        <Hero />
        <Quote
            text='Success is not final, failure is not fatal: it is the courage to continue that counts.'
            author='Winston Churchill'
        />
        <Projects repos={repos} />
        <Quote
            text='Those who want to leave footprints will never fly'
            author='Sadhguru'
        />
        <Skills />
    </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const repos = await getRepositories();

    return { props: { repos: repos } };
};
