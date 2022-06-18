import React from 'react';
import { useNavigate } from 'react-router-dom';
import WorkStress from '../../animations/components/WorkStress';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import classes from './recommend-treatment.module.css';

const RecommendTreatmentPage = () => {
	let navigate = useNavigate();
	return (
		<Layout title="Recommend Treatment">
			<WorkStress />
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
				<Button onClick={() => navigate('/recommend-treatment/1')} title="Fill The Form" />
			</div>
		</Layout>
	);
};

export default RecommendTreatmentPage;
