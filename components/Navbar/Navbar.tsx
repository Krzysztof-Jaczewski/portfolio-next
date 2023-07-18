import { FC } from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.scss';
import Image from 'next/image';

const Navbar: FC = () => (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <Link to='hero' duration={500} smooth className={styles.logo}>
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

export default Navbar;
