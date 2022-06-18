import React, { useState } from 'react';
import feature_value_map from '../../assets/data/feat_val_map.json';
import feature_ques_map from '../../assets/data/feature_ques_map.json';
import Select from '../../components/Form/Select/Select';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import { transformListToOptions } from '../../utils/transform_options';

const features = [
	'remote_work',
	'tech_company',
	'benefits',
	'care_options',
	'wellness_program',
	'seek_help'
];

const SecondFormPage = () => {
	const [
		remote_work,
		setRemote_work
	] = useState('default');
	const [
		tech_company,
		setTech_company
	] = useState('default');
	const [
		benefits,
		setBenefits
	] = useState('default');
	const [
		care_options,
		setCare_options
	] = useState('default');
	const [
		wellness_program,
		setWellness_program
	] = useState('default');
	const [
		seek_help,
		setSeek_help
	] = useState('default');

	const [
		error,
		setError
	] = useState('');

	const handleNextClick = () => {
		if (
			remote_work === 'default' ||
			tech_company === 'default' ||
			care_options === 'default' ||
			wellness_program === 'default' ||
			seek_help === 'default' ||
			benefits === 'default'
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
							value={remote_work}
							inputOptions={transformListToOptions(feature_value_map['remote_work'])}
							label={feature_ques_map['remote_work']}
							onChange={(e) => setRemote_work(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={tech_company}
							inputOptions={transformListToOptions(feature_value_map['tech_company'])}
							label={feature_ques_map['tech_company']}
							onChange={(e) => setTech_company(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={care_options}
							inputOptions={transformListToOptions(feature_value_map['care_options'])}
							label={feature_ques_map['care_options']}
							onChange={(e) => setCare_options(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={wellness_program}
							inputOptions={transformListToOptions(feature_value_map['wellness_program'])}
							label={feature_ques_map['wellness_program']}
							onChange={(e) => setWellness_program(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={seek_help}
							inputOptions={transformListToOptions(feature_value_map['seek_help'])}
							label={feature_ques_map['seek_help']}
							onChange={(e) => setSeek_help(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={benefits}
							inputOptions={transformListToOptions(feature_value_map['benefits'])}
							label={feature_ques_map['benefits']}
							onChange={(e) => setBenefits(e.currentTarget.value)}
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

export default SecondFormPage;
