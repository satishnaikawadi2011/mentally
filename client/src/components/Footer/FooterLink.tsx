import React from 'react';
import classes from './footer.module.css';

interface Props {
	title: string;
	to: string;
}

const FooterLink: React.FC<Props> = ({ title, to }) => {
	return (
		<li>
			<a href={to} className={classes.footer__link}>
				{title}
			</a>
		</li>
	);
};

export default FooterLink;
