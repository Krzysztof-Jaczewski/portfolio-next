import { FC, ReactNode } from 'react';
import styles from './section.module.scss';
import clsx from 'clsx';

interface Props {
    children: ReactNode;
    title: string;
    id: string;
    className?: string;
}

const Section: FC<Props> = ({ children, title, className, ...rest }) => {
    return (
        <section {...rest} className={clsx(styles.sectionWrapper, className)}>
            <h2 className={styles.header}>{title}</h2>
            <div>{children}</div>
        </section>
    );
};

export default Section;
