import { FC, ReactNode } from 'react';
import styles from './footer.module.scss';

const Footer: FC = () => (
    <footer className={styles.footerWrapper}>
        <p>Made with passion and love 💖 by EyeCode Krzysztof Jaczewski</p>
    </footer>
);

export default Footer;
