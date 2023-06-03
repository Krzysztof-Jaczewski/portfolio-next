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
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
            <defs>
                <filter id='gooey'>
                    <feGaussianBlur
                        in='SourceGraphic'
                        stdDeviation='5'
                        result='blur'
                    />
                    <feColorMatrix
                        in='blur'
                        type='matrix'
                        values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                        result='highContrastGraphic'
                    />
                    <feComposite
                        in='SourceGraphic'
                        in2='highContrastGraphic'
                        operator='atop'
                    />
                </filter>
            </defs>
        </svg>

        <span className={styles.bubbles}>
            {[...Array(10)].map((_, index) => (
                <span key={index} className={styles.bubble} />
            ))}
        </span>
    </Link>
);

export default LinkButton;
