import { FC, HTMLProps } from 'react';
import styles from './bubbleButton.module.scss';
import clsx from 'clsx';

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
    </button>
);

export default LinkButton;
