import { FC, MouseEvent, useState } from 'react';
import styles from './navLinks.module.scss';
import clsx from 'clsx';
import { Link } from 'react-scroll';
import Indicator from 'components/Navbar/Components/NavTag/Indicator';

interface Props {
    links: {
        text: string;
        href: string;
    }[];
}

const NavLinks: FC<Props> = ({ links, ...rest }) => {
    const [indicatorStyles, setIndicatorStyles] = useState({});
    const [isToggled, setIsToggled] = useState(false);

    const handleLinkClick = (event: MouseEvent<HTMLDivElement>) => {
        setIndicatorStyles({
            left: (event.target as HTMLDivElement).offsetLeft,
            width: (event.target as HTMLDivElement).offsetWidth,
        });
        setIsToggled((prevState) => !prevState);
    };

    return (
        <nav className={clsx(styles.wrapper)} {...rest}>
            {links.map(({ text, href }) => (
                <Link key={text} to={href} duration={500} smooth>
                    <div className={styles.link} onClick={handleLinkClick}>
                        {text}
                    </div>
                </Link>
            ))}
            <Indicator isToggled={isToggled} style={indicatorStyles} />
        </nav>
    );
};

export default NavLinks;
