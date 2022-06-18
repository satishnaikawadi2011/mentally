import React from 'react';
import classes from './select.module.css';
import inputClasses from '../Input/input.module.css';

export interface InputOptionsType {
	[key: string | number]: string | number;
}

export interface Props {
	inputOptions: InputOptionsType;
	label: string;
}

const Select: React.FC<Props & React.HTMLProps<HTMLSelectElement>> = ({
	inputOptions,
	label,
	placeholder,
	...props
}) => {
	const options = (
		<React.Fragment>
			{Object.keys(inputOptions as any).map((k: string) => {
				return (
					<option key={k} value={inputOptions[k]}>
						{k}
					</option>
				);
			})}
		</React.Fragment>
	);

	return (
		<div className={inputClasses.input__container}>
			<label className={inputClasses.label}>{label}</label>
			<select {...props as any} className={classes.select}>
				<option value="default" disabled>
					{placeholder}
				</option>
				{options}
			</select>
		</div>
	);
};

export default Select;
