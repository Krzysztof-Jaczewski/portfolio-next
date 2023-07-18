import { FC, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

const Navbar: FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    }, [isClicked]);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link
                    to='hero'
                    duration={500}
                    offset={-100}
                    smooth
                    className={clsx(styles.logo, isClicked && styles.flyout)}
                    onClick={() => {
                        setIsClicked((prevState) => !prevState);
                    }}
                >
                    <Image fill src='/logo.png' alt='' />
                </Link>
                <nav className={styles.nav}>
                    <Link to='projects' duration={500} smooth>
                        Projekty
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
