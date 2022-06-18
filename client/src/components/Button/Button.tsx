import React from 'react';
import classes from './button.module.css';

interface Props {
	title: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	variant?: 'normal' | 'outlined';
}

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
	title,
	onClick = () => {},
	variant = 'normal',
	...props
}) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		onClick(e);
	};
	const final_classes = `${classes.button} ${
		variant === 'normal' ? classes.normal__btn :
		classes.outline__btn}`;
	return (
		<button className={final_classes} onClick={handleClick} {...props as any}>
			{title}
		</button>
	);
};

export default Button;
