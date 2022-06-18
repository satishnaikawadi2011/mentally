import React, { useState } from 'react';
import feature_value_map from '../../assets/data/feat_val_map.json';
import feature_ques_map from '../../assets/data/feature_ques_map.json';
import Select from '../../components/Form/Select/Select';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import { transformListToOptions } from '../../utils/transform_options';

const ThirdFormPage = () => {
	const [
		anonymity,
		setAnonymity
	] = useState('default');
	const [
		leave,
		setLeave
	] = useState('default');
	const [
		mental_health_consequence,
		setMental_health_consequence
	] = useState('default');
	const [
		phys_health_consequence,
		setPhys_health_consequence
	] = useState('default');
	const [
		coworkers,
		setCoworkers
	] = useState('default');

	const [
		error,
		setError
	] = useState('');

	const handleNextClick = () => {
		if (
			anonymity === 'default' ||
			leave === 'default' ||
			mental_health_consequence === 'default' ||
			coworkers === 'default' ||
			phys_health_consequence === 'default'
		) {
			setError('Please choose options for each question!!');
			return;
		}

		setError('');
	};

	return (
		<Layout title="Treatment Recommendation - Page 1" footer={false}>
			<React.Fragment>
				<h1 style={{ textAlign: 'center', marginTop: 100 }}>Mental Health Treatment Recommendation</h1>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<form style={{ maxWidth: 700, width: '100%' }}>
						<Select
							value={anonymity}
							inputOptions={transformListToOptions(feature_value_map['anonymity'])}
							label={feature_ques_map['anonymity']}
							onChange={(e) => setAnonymity(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={leave}
							inputOptions={transformListToOptions(feature_value_map['leave'])}
							label={feature_ques_map['leave']}
							onChange={(e) => setLeave(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={mental_health_consequence}
							inputOptions={transformListToOptions(feature_value_map['mental_health_consequence'])}
							label={feature_ques_map['mental_health_consequence']}
							onChange={(e) => setMental_health_consequence(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={phys_health_consequence}
							inputOptions={transformListToOptions(feature_value_map['phys_health_consequence'])}
							label={feature_ques_map['phys_health_consequence']}
							onChange={(e) => setPhys_health_consequence(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={coworkers}
							inputOptions={transformListToOptions(feature_value_map['coworkers'])}
							label={feature_ques_map['coworkers']}
							onChange={(e) => setCoworkers(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						{error && (
							<p style={{ marginTop: 20, textAlign: 'center', fontWeight: 'bold', color: ' #ff4d4d' }}>
								{error}
							</p>
						)}
						<Button
							onClick={handleNextClick}
							title="Next Page"
							style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
						/>
					</form>
				</div>
			</React.Fragment>
		</Layout>
	);
};

export default ThirdFormPage;
