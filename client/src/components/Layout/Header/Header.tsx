import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './header.module.css';
import Logo from './Logo/Logo';
import NavLink from './NavLink';

const darkTheme = 'dark-theme';
const toggleId = 'nav-toggle';
const navId = 'nav-menu';

const Header = () => {
	let navigate = useNavigate();
	let toggle: any = null,
		nav: any = null;
	useEffect(() => {
		(toggle = document.getElementById(toggleId)), (nav = document.getElementById(navId));
	}, []);

	const [
		isDark,
		setIsDark
	] = useState(false);

	const handleThemeChange = () => {
		document.body.classList.toggle(darkTheme);
		setIsDark(!isDark);
	};

	const handleShowMenu = () => {
		console.log(toggle, nav);
		if (toggle && nav) {
			console.log('Inside------>', toggle, nav);
			nav.classList.toggle(classes.show__menu);
		}
	};

	return (
		<header className="l-header" id="header">
			<nav className={`${classes.nav} bd-container`}>
				<Logo />

				<div className={classes.nav__menu} id="nav-menu">
					<ul className={classes.nav__list}>
						<NavLink title="Home" onClick={() => navigate('/')} />
						<NavLink title="About" onClick={() => navigate('/about')} />
						<NavLink title="Treatment Recommendation" onClick={(e) => navigate('/recommend-treatment')} />
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
