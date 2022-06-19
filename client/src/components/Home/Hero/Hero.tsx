import React from 'react';
import classes from './hero.module.css';
import hero from '../../../assets/images/medical_care.png';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	let navigate = useNavigate();
	return (
		<section className="home" id="home">
			<div className={`${classes.home__container} bd-container bd-grid`}>
				<div className={classes.home__img}>
					<img src={hero} alt="Hero" />
				</div>

				<div className={classes.home__data}>
					<h1 className={classes.home__title}>Check Mental Health Status</h1>
					<p className={classes.home__description}>
						Check if you need a mental health illness treatment or not by answering simple questions.
					</p>
					<Button title="Get Started" onClick={() => navigate('/recommend-treatment')} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
