import { FC } from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';
import devImage from '/public/images/dev.png';
import { ScrollButton } from 'components/ScrollButton';

const Hero: FC = () => (
    <div className={styles.header}>
        <div className={styles.intro}>
            <h1>Krzysztof Jaczewski</h1>
            <h2>Frond-end developer</h2>
            <ScrollButton
                className={styles.button}
                text='Wybrane Projekty'
                link='projects'
            />
        </div>
        <div className={styles.image}>
            <Image src={devImage} alt='devImage' placeholder='blur' />
        </div>
    </div>
);

export default Hero;
