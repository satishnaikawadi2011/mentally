import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './footer.module.css';

interface Props {
	icon: string;
	to: string;
}

const FooterSocial: React.FC<Props> = ({ icon, to }) => {
	let navigate = useNavigate();
	return (
		<a onClick={() => navigate(to)} className={classes.footer__social}>
			<i className={icon} />
		</a>
	);
};

export default FooterSocial;
