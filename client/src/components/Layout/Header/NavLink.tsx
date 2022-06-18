import React from 'react';
import classes from './header.module.css';

interface Props {
	title: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const navId = 'nav-menu';
const nav = document.getElementById(navId);

const NavLink: React.FC<Props> = ({ onClick, title }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		if (nav) {
			nav.classList.remove(classes.show__menu);
		}
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<li className={classes.nav__item}>
			<a onClick={handleClick} className={`${classes.nav__link}`}>
				{title}
			</a>
		</li>
	);
};

export default NavLink;
