import React, { useState } from 'react';
import feature_value_map from '../../assets/data/feat_val_map.json';
import feature_ques_map from '../../assets/data/feature_ques_map.json';
import Input from '../../components/Form/Input/Input';
import Select from '../../components/Form/Select/Select';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import { isNumeric } from '../../utils/validate-inputs';
import { transformListToOptions } from '../../utils/transform_options';
import { useNavigate } from 'react-router-dom';

const FirstFormPage = () => {
	let navigate = useNavigate();

	const [
		age,
		setAge
	] = useState('');
	const [
		Gender,
		setGender
	] = useState('default');
	const [
		family_history,
		setFamily_history
	] = useState('default');
	const [
		self_employed,
		setSelf_employed
	] = useState('default');
	const [
		work_interfere,
		setWork_interfere
	] = useState('default');
	const [
		no_employees,
		setNo_employees
	] = useState('default');

	const [
		error,
		setError
	] = useState('');

	const handleNextClick = () => {
		if (!isNumeric(age)) {
			setError('Please enter a valid age!!');
			return;
		}
		if (
			Gender === 'default' ||
			no_employees === 'default' ||
			work_interfere === 'default' ||
			family_history === 'default' ||
			self_employed === 'default'
		) {
			setError('Please choose options for each question!!');
			return;
		}

		setError('');
		navigate('/recommend-treatment/2', {
			state: { age, Gender, no_employees, work_interfere, self_employed, family_history }
		});
	};

	return (
		<Layout title="Treatment Recommendation - Page 1" footer={false}>
			<React.Fragment>
				<h1 style={{ textAlign: 'center', marginTop: 100 }}>Mental Health Treatment Recommendation</h1>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<form style={{ maxWidth: 700, width: '100%' }}>
						<Input
							label="Age"
							placeholder="Enter your age"
							value={age}
							onChange={(e) => setAge(e.currentTarget.value)}
						/>
						<Select
							value={Gender}
							inputOptions={transformListToOptions(feature_value_map['Gender'])}
							label={feature_ques_map['Gender']}
							onChange={(e) => setGender(e.currentTarget.value)}
							placeholder="Choose your gender"
						/>
						<Select
							value={family_history}
							inputOptions={transformListToOptions(feature_value_map['family_history'])}
							label={feature_ques_map['family_history']}
							onChange={(e) => setFamily_history(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={self_employed}
							inputOptions={transformListToOptions(feature_value_map['self_employed'])}
							label={feature_ques_map['self_employed']}
							onChange={(e) => setSelf_employed(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={work_interfere}
							inputOptions={transformListToOptions(feature_value_map['work_interfere'])}
							label={feature_ques_map['work_interfere']}
							onChange={(e) => setWork_interfere(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={no_employees}
							inputOptions={transformListToOptions(feature_value_map['no_employees'])}
							label={feature_ques_map['no_employees']}
							onChange={(e) => setNo_employees(e.currentTarget.value)}
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

export default FirstFormPage;
