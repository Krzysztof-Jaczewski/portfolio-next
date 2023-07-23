import { FC } from 'react';
import styles from './skills.module.scss';
import { Section } from 'components/Section';
import { skillsSet } from 'configs/skills';

const Skills: FC = () => {
    return (
        <Section id='skills' title='Umiejętności'>
            <div className={styles.skillsWrapper}>
                {Object.entries(skillsSet).map(([key, value]) => (
                    <div className={styles.skillsBox} key={key}>
                        <h3>{key}</h3>
                        <ul className={styles.skillsList}>
                            {value.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
