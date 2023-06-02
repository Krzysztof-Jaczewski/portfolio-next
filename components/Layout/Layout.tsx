import { FC, ReactNode } from 'react';
import styles from './layout.module.scss';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.siteWrapper}>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
