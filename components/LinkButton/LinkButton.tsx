import { FC } from 'react';
import styles from './linkButton.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
    link: string;
    text: string;
    className?: string;
}

const LinkButton: FC<Props> = ({ link, text, className }) => (
    <Link href={link} className={clsx(styles.button, className)}>
        {text}
    </Link>
);

export default LinkButton;
