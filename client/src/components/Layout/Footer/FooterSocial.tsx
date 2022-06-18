import React from 'react';
import classes from './footer.module.css';

interface Props {
	icon: string;
	to: string;
}

const FooterSocial: React.FC<Props> = ({ icon, to }) => {
	return (
		<a href={to} className={classes.footer__social}>
			<i className={icon} />
		</a>
	);
};

export default FooterSocial;
