import type { GetStaticProps, NextPage } from 'next';
import getRepositories from '../modules/getRepositories/getRepositories';
import { allowedRepos } from 'configs/allowedRepos';
import { RepoType } from 'modules/getRepositories/types';

interface Props {
    repos: RepoType[];
}

const Home: NextPage<Props> = ({ repos }) => {
    return <div>{repos?.map(({ name }) => name)}</div>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const repos = await getRepositories();

    const filteredRepos = repos.filter(({ name }) =>
        allowedRepos.includes(name)
    );

    return { props: { repos: filteredRepos } };
};
