import { FC } from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';
import devImage from '/public/images/dev.png';
import { LinkButton } from 'components/LinkButton';

const Hero: FC = () => (
    <div className={styles.header}>
        <div className={styles.intro}>
            <h1>Krzysztof Jaczewski</h1>
            <h2>Frond-end developer</h2>
            <LinkButton
                className={styles.button}
                text='Projekty'
                link='/#projects'
            />
        </div>
        <div className={styles.image}>
            <Image src={devImage} alt='devImage' placeholder='blur' />
        </div>
    </div>
);

export default Hero;
