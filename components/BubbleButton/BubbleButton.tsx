import { FC, HTMLProps } from 'react';
import styles from './bubbleButton.module.scss';
import clsx from 'clsx';
import SvgFilter from 'components/BubbleButton/svgfilter';

interface Props extends HTMLProps<HTMLButtonElement> {
    text: string;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
}

const LinkButton: FC<Props> = ({
    text,
    className,
    type = 'button',
    ...rest
}) => (
    <button className={clsx(styles.button, className)} type={type} {...rest}>
        {text}
        <SvgFilter />
        <span className={styles.bubbles}>
            {[...Array(10)].map((_, index) => (
                <span key={index} className={styles.bubble} />
            ))}
        </span>
    </button>
);

export default LinkButton;
