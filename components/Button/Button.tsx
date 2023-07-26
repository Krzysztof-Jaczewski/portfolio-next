import { FC, HTMLProps } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

interface Props extends HTMLProps<HTMLButtonElement> {
    text: string;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
}

const Button: FC<Props> = ({ text, className, type = 'button', ...rest }) => (
    <button className={clsx(styles.button, className)} type={type} {...rest}>
        {text}
    </button>
);

export default Button;
