import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './footer.module.css';

interface Props {
	title: string;
	to: string;
}

const FooterLink: React.FC<Props> = ({ title, to }) => {
	let navigate = useNavigate();
	return (
		<li>
			<a onClick={() => navigate(to)} className={classes.footer__link}>
				{title}
			</a>
		</li>
	);
};

export default FooterLink;
