import { FC } from 'react';
import styles from './projects.module.scss';
import { Section } from 'components/Section';
import { RepoType } from 'modules/getRepositories/types';
import { Card } from 'components/Card';

interface Props {
    repos: RepoType;
}

const Skills: FC<Props> = ({ repos }) => {
    return (
        <Section id='skills' title='Umiejętności'>
            <div className={styles.projectsWrapper}>
                {repos.items?.map(
                    ({ fields: { image, description, ...rest } }) => (
                        <Card
                            key={rest.title}
                            image={`https:${image.fields.file.url}`}
                            description={
                                description.content[0].content[0].value
                            }
                            {...rest}
                        />
                    )
                )}
            </div>
        </Section>
    );
};

export default Skills;
