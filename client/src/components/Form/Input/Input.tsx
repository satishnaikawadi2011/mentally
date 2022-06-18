import React from 'react';
import classes from './input.module.css';

interface Props {
	label: string;
}

const Input: React.FC<React.HTMLProps<HTMLInputElement> & Props> = ({ label, ...props }) => {
	return (
		<div className={classes.input__container}>
			<label className={classes.label}>{label}</label>
			<input className={classes.input} {...props as any} />
		</div>
	);
};

export default Input;
