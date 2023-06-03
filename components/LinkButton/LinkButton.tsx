import { FC } from 'react';
import styles from './linkButton.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import SvgFilter from 'components/LinkButton/svgfilter';

interface Props {
    link: string;
    text: string;
    className?: string;
}

const LinkButton: FC<Props> = ({ link, text, className }) => (
    <Link href={link} className={clsx(styles.button, className)}>
        {text}
        <SvgFilter />
        <span className={styles.bubbles}>
            {[...Array(10)].map((_, index) => (
                <span key={index} className={styles.bubble} />
            ))}
        </span>
    </Link>
);

export default LinkButton;
