import { FC } from 'react';
import styles from './navbar.module.scss';
import { AnimatedLogo } from 'components/AnimatedLogo';
import { NavLinks } from 'components/Navbar/Components/NavLinks';
import { Hamburger } from 'components/Navbar/Components/Hamburger';

const links = [
    { text: 'Projekty', href: 'projects' },
    { text: 'Umiejętności', href: 'skills' },
];

const Navbar: FC = () => (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <AnimatedLogo />
            <Hamburger />
            <NavLinks links={links} />
        </div>
    </header>
);
export default Navbar;
