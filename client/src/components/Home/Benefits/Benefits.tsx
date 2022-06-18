import React from 'react';
import classes from './benefits.module.css';
import benefits from '../../../assets/images/happy.png';
import Button from '../../Button/Button';

const Benefits = () => {
	return (
		<section style={{ marginTop: 30 }} className="benefits section bd-container" id="benefits">
			<div className={`${classes.benefits__container} bd-grid`}>
				<div className={classes.benefits__data}>
					<h2 className="section-title-center">Benefits of Mental Health</h2>
					<p className={classes.benefits__description}>
						The benefits of intentionally practicing to improve mental health are a response to the chronic
						stress reported at epidemic levels around the world.Improved mental health practices can reduce
						the risk.
					</p>
					<Button title="Try It" />
				</div>

				<div className={classes.benefits__img}>
					<img src={benefits} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Benefits;
