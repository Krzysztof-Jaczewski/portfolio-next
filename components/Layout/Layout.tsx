import { FC, ReactNode } from 'react';
import styles from './layout.module.scss';
import { ParallaxBackground } from 'components/ParallaxBackground';
import { Footer } from 'components/Footer';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.siteWrapper}>
            <ParallaxBackground />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
