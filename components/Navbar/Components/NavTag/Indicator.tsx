import { FC, HTMLProps } from 'react';
import styles from './indicator.module.scss';
import clsx from 'clsx';

interface Props {
    isToggled: boolean;
}

const Indicator: FC<Props & HTMLProps<HTMLDivElement>> = ({
    isToggled,
    ...rest
}) => {
    return (
        <div
            className={clsx(styles.indicator, isToggled && styles.activeTag)}
            {...rest}
        />
    );
};

export default Indicator;
