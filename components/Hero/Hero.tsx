import { FC } from 'react';
import styles from './hero.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import devImage from '/public/images/dev.png';
import { LinkButton } from 'components/LinkButton';

const Hero: FC = () => (
    <div className={styles.header}>
        <div>
            <h2>Krzysztof Jaczewski</h2>
            <h3>Frond-end developer</h3>
            <LinkButton text='zobacz projekty' link='/#projects' />
        </div>
        <Image
            className={styles.image}
            src={devImage}
            alt='devImage'
            placeholder='blur'
        />
    </div>
);

export default Hero;
