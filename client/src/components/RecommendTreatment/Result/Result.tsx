import React from 'react';
import classes from './result.module.css';
import YogaDev from '../../../animations/components/YogaDev';
import Breathing from '../../../animations/components/Breathing';

interface Props {
	result: boolean;
}

const Result: React.FC<Props> = ({ result }) => {
	let title = '',
		desc = '';

	if (result) {
		desc =
			'The prediction done by application shows that you need to take treatment for mental health. You can perform many useful methods such as talking therapy,meditation,self-help,etc to reduce chronic stress.';
		title = 'Treatment Needed';
	}
	else {
		desc =
			'The prediction done by application shows that you do not need any treatment for mental health.But you can always perform meditation to boost productivity and happiness.';
		title = 'Treatment Not Needed';
	}
	return (
		<section className={`${classes.result} section`}>
			<div className={`${classes.result__container} bd-container bd-grid`}>
				<div className={classes.result__content}>
					<h2 className={`section-title-center ${classes.result__title}`}>{title}</h2>
					<p className={classes.result__description}>{desc}</p>
				</div>
				{
					result ? <YogaDev width={250} height={250} /> :
					<Breathing height={250} width={250} />}
			</div>
		</section>
	);
};

export default Result;
