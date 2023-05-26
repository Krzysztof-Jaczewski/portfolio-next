import { FC } from 'react';
import styles from './hero.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import devImage from '/public/images/dev.png';

const hero: FC = () => {
    return (
        <section className={styles.header}>
            <div>
                <h2> Krzysztof Jaczewski</h2>
                <h3>frond-end designer</h3>
                <Link href='/#projects' className={styles.button}>
                    Check projects
                </Link>
            </div>
            <Image
                className={styles.image}
                src={devImage}
                alt='devImage'
                placeholder='blur'
            />
        </section>
    );
};

export default hero;
