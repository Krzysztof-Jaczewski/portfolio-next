import type { GetStaticProps, NextPage } from 'next';
import getRepositories from '../modules/getRepositories/getRepositories';
import { allowedRepos } from 'configs/allowedRepos';
import { RepoType } from 'modules/getRepositories/types';
import Link from 'next/link';
import Hero from 'components/Hero';

interface Props {
    repos: RepoType[];
}

const Home: NextPage<Props> = ({ repos }) => {
    return (
        <div>
            <Hero />
            <section id='projects'>
                <h2>Projects</h2>
                {repos?.map(({ name, git_url }) => (
                    <div key={name}>
                        {name}
                        <Link href={git_url}>
                            <button>sprawdź</button>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const repos = await getRepositories();

    const filteredRepos = repos.filter(({ name }) =>
        allowedRepos.includes(name)
    );

    return { props: { repos: filteredRepos } };
};
