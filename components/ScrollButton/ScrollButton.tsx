import { FC } from 'react';
import { Link } from 'react-scroll';
import { Button } from 'components/Button';

interface Props {
    link: string;
    text: string;
    className?: string;
}

const ScrollButton: FC<Props> = ({ link, text, className }) => (
    <Link to={link} duration={500} smooth>
        <Button text={text} className={className} />
    </Link>
);

export default ScrollButton;
