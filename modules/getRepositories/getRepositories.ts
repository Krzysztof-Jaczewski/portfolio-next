import axios from 'axios';
import { RepoType } from './types';

const username = 'Krzysztof-Jaczewski';
const apiUrl = `https://api.github.com/users/${username}/repos`;
const getRepositories = async (): Promise<RepoType[]> => {
    try {
        const res = await axios.get(apiUrl);
        return res.data;
    } catch (error) {
        return [];
    }
};

export default getRepositories;
