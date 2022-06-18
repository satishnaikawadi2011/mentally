import React from 'react';
import { APP_NAME } from '../../constants';
import classes from './footer.module.css';
import FooterLink from './FooterLink';
import FooterSocial from './FooterSocial';

const Footer = () => {
	return (
		<footer className="footer section">
			<div className={`${classes.footer__container} bd-container bd-grid`}>
				<div className={classes.footer__content}>
					<h3 className={classes.footer__title}>
						<a href="#" className={classes.footer__logo}>
							{APP_NAME}
						</a>
					</h3>
					<p className={classes.footer__description}>
						Check for mental health status and <br />increase happiness
					</p>
				</div>

				<div className={classes.footer__content}>
					<h3 className={classes.footer__title}>Our Services</h3>
					<ul>
						<FooterLink title="Treatment Recommendation" to="/" />
					</ul>
				</div>

				<div className={classes.footer__content}>
					<h3 className={classes.footer__title}>Our Company</h3>
					<ul>
						<FooterLink title="About us" to="/" />
					</ul>
				</div>

				<div className={classes.footer__content}>
					<h3 className={classes.footer__title}>Social</h3>
					<FooterSocial icon="bx bxl-facebook-circle" to="/" />
					<FooterSocial icon="bx bxl-twitter" to="/" />
					<FooterSocial icon="bx bxl-instagram-alt" to="/" />
				</div>
			</div>

			<p className={classes.footer__copy}>&#169; 2022 {APP_NAME}. All right reserved</p>
		</footer>
	);
};

export default Footer;
