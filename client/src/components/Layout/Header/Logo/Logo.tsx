import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '../../../../constants';
import classes from './logo.module.css';

interface ILogoProps {
	style?: CSSProperties;
}

const Logo: React.FC<ILogoProps> = ({ style }) => {
	let navigate = useNavigate();
	return (
		<div style={style}>
			<h2 className={classes.title}>
				<a onClick={() => navigate('/')}>
					<span />
					{APP_NAME}
				</a>
			</h2>
		</div>
	);
};

export default Logo;
