import type { GetStaticProps, NextPage } from 'next';
import getRepositories from '../modules/getRepositories/getRepositories';
import { RepoType } from 'modules/getRepositories/types';
import { Hero } from 'components/Hero';
import { Layout } from 'components/Layout';
import { Projects } from 'components/Projects';

interface Props {
    repos: RepoType;
}

const Home: NextPage<Props> = ({ repos }) => (
    <Layout>
        <Hero />
        <Projects repos={repos} />
    </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const repos = await getRepositories();

    return { props: { repos: repos } };
};
