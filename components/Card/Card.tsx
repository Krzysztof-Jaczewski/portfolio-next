import { FC, HTMLProps, ReactNode } from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Tags } from 'components/Tags';
import { LinkButton } from 'components/LinkButton';

interface Props extends HTMLProps<HTMLDivElement> {
    title: string;
    gitHubLink: string;
    siteLink: string;
    techStack: string[];
    image: string;
    description: string;
}

const Card: FC<Props> = ({
    title,
    gitHubLink,
    siteLink,
    image,
    techStack,
    description,
    ...rest
}) => {
    return (
        <div className={styles.cardWrapper} {...rest}>
            <div className={styles.imageContainer}>
                <Image src={image} alt='' width={300} height={200} />
            </div>
            <div className={styles.infoBox}>
                <h2 className={styles.title}>{title}</h2>
                <p>{description}</p>
                <Tags techStack={techStack} />
                <LinkButton text='</>' link={gitHubLink} />
                <LinkButton text='Zobacz' link={siteLink} />
            </div>
        </div>
    );
};

export default Card;
