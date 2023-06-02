import { RepoType } from './types';
import { createClient } from 'contentful';

const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const getRepositories = async (): Promise<RepoType> => {
    try {
        const res =
            (await contentfulClient.getEntries()) as unknown as RepoType;
        return res;
    } catch (error) {
        return {};
    }
};

export default getRepositories;
