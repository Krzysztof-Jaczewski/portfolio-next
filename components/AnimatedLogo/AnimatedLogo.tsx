import { FC, useEffect, useState } from 'react';
import styles from './animatedLogo.module.scss';
import clsx from 'clsx';
import { Link } from 'react-scroll';
import Image from 'next/image';

const AnimatedLogo: FC = ({ ...rest }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsClicked(false);
        }, 1500);
    }, [isClicked]);

    return (
        <Link
            to='hero'
            duration={500}
            offset={-100}
            smooth
            className={clsx(styles.logo, isClicked && styles.flyout)}
            onClick={() => {
                setIsClicked((prevState) => !prevState);
            }}
            {...rest}
        >
            <Image fill src='/logo.png' alt='' />
        </Link>
    );
};

export default AnimatedLogo;
