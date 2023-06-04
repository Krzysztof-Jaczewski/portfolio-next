import { FC } from 'react';
import Link from 'next/link';
import { BubbleButton } from 'components/BubbleButton';

interface Props {
    link: string;
    text: string;
    className?: string;
}

const LinkButton: FC<Props> = ({ link, text, className }) => (
    <Link href={link}>
        <BubbleButton text={text} className={className} />
    </Link>
);

export default LinkButton;
