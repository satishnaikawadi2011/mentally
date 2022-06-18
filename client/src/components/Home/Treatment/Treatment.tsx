import React from 'react';
import classes from './treatment.module.css';
import TreatmentCard from './TreatmentCard';

import therapyImg from '../../../assets/images/therapy.png';
import meditationImg from '../../../assets/images/meditation.png';
import pilatesImg from '../../../assets/images/pilates.png';

const Treatment = () => {
	return (
		<section className="treatment section bd-container" id="treatment">
			<h2 className="section-title">
				Methods For Managing <br /> Mental Health Problems
			</h2>
			<div className={`${classes.treatment__container} bd-grid`}>
				<TreatmentCard title="Psychotherapy" img={therapyImg} />
				<TreatmentCard title="Medication" img={meditationImg} />
				<TreatmentCard title="Self-help" img={pilatesImg} />
			</div>
		</section>
	);
};

export default Treatment;
