import { FC } from 'react';
import styles from './quote.module.scss';

interface Props {
    text: string;
    author?: string;
}

const Footer: FC<Props> = ({ text, author }) => (
    <figure className={styles.quoteContainer}>
        <q className={styles.quote}>{text}</q>
        {author ? <cite className={styles.author}>{author}</cite> : null}
    </figure>
);

export default Footer;
