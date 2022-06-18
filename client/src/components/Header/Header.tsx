import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '../../constants';
import classes from './header.module.css';
import NavLink from './NavLink';

const darkTheme = 'dark-theme';
const toggleId = 'nav-toggle';
const navId = 'nav-menu';
const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId);

const Header = () => {
	const [
		isDark,
		setIsDark
	] = useState(false);

	const handleThemeChange = () => {
		document.body.classList.toggle(darkTheme);
		setIsDark(!isDark);
	};

	const handleShowMenu = () => {
		if (toggle && nav) {
			nav.classList.toggle(classes.show__menu);
		}
	};

	// let navigate = useNavigate();

	return (
		<header className="l-header" id="header">
			<nav className={`${classes.nav} bd-container`}>
				<a onClick={() => {}} className={classes.nav__logo}>
					{APP_NAME}
				</a>

				<div className={classes.nav__menu} id="nav-menu">
					<ul className={classes.nav__list}>
						<NavLink title="Home" />
						<NavLink title="Share" />
						<NavLink title="Decorations" />
						<NavLink title="Accessory" />
						<li>
							<i
								onClick={handleThemeChange}
								className={`bx bx-toggle-${
									isDark ? `right` :
									`left`} ${classes.change__theme}`}
								id="theme-button"
							/>
						</li>
					</ul>
				</div>

				<div onClick={handleShowMenu} className={classes.nav__toggle} id="nav-toggle">
					<i className="bx bx-grid-alt" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
