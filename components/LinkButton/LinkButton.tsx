import { FC } from 'react';
import Link from 'next/link';
import { Button } from 'components/Button';

interface Props {
    link: string;
    text: string;
    className?: string;
}

const LinkButton: FC<Props> = ({ link, text, className }) => (
    <Link href={link}>
        <Button text={text} className={className} />
    </Link>
);

export default LinkButton;
