import { FC } from 'react';
import styles from './tags.module.scss';

interface Props {
    techStack: string[];
}

const Tags: FC<Props> = ({ techStack }) => (
    <div className={styles.techWrapper}>
        {techStack.map((tech) => (
            <div className={styles.tag} key={tech}>
                {tech}
            </div>
        ))}
    </div>
);
export default Tags;
