import { FC, useState } from 'react';
import styles from './hamburger.module.scss';
import clsx from 'clsx';

const Hamburger: FC = ({ ...rest }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            className={styles.wrapper}
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            {...rest}
        >
            <div
                className={clsx(styles.block, isMenuOpen && styles.open)}
            ></div>
        </div>
    );
};

export default Hamburger;
