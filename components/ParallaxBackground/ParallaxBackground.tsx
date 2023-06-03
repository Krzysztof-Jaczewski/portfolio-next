import { FC } from 'react';
import styles from './parallaxBackground.module.scss';
import { useMarksArray } from 'components/ParallaxBackground/helper';

const ParallaxBackground: FC = () => {
    const marksArray = useMarksArray();

    return (
        <div className={styles.siteWrapper}>
            {marksArray.map(({ id, content, style }) => (
                <div key={id} className={styles.marks} style={style}>
                    {content}
                </div>
            ))}
        </div>
    );
};

export default ParallaxBackground;
