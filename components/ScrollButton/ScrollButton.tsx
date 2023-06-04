import { FC } from 'react';
import { Link } from 'react-scroll';
import { BubbleButton } from 'components/BubbleButton';

interface Props {
    link: string;
    text: string;
    className?: string;
}

const ScrollButton: FC<Props> = ({ link, text, className }) => (
    <Link to={link} duration={500} smooth>
        <BubbleButton text={text} className={className} />
    </Link>
);

export default ScrollButton;
