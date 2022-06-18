import React from 'react';
import classes from './treatment.module.css';

interface Props {
	img: string;
	title: string;
}

const TreatmentCard: React.FC<Props> = ({ img, title }) => {
	return (
		<div className={classes.treatment__data}>
			<img src={img} alt="" className={classes.treatment__img} />
			<h3 className={classes.treatment__title}>{title}</h3>
		</div>
	);
};

export default TreatmentCard;
