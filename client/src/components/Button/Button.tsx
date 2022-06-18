import React from 'react';
import classes from './button.module.css';

interface Props {
	title: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Button: React.FC<Props> = ({ title, onClick = () => {} }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		onClick(e);
	};
	return (
		<a className={classes.button} onClick={handleClick}>
			{title}
		</a>
	);
};

export default Button;
