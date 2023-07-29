import { FC, MouseEvent, useState } from 'react';
import styles from './hamburger.module.scss';
import clsx from 'clsx';

const Hamburger: FC = ({ ...rest }) => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    return <div className={styles.wrapper} {...rest} />;
};

export default Hamburger;
