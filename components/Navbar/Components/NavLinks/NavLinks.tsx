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
    console.log('TCL: [isToggled', isToggled);

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
                <div
                    key={text}
                    className={styles.link}
                    onClick={handleLinkClick}
                >
                    <Link to={href} duration={500} smooth>
                        {text}
                    </Link>
                </div>
            ))}
            <Indicator isToggled={isToggled} style={indicatorStyles} />
        </nav>
    );
};

export default NavLinks;
