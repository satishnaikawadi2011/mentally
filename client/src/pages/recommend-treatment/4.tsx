import React, { useEffect, useState } from 'react';
import feature_value_map from '../../assets/data/feat_val_map.json';
import feature_ques_map from '../../assets/data/feature_ques_map.json';
import Select from '../../components/Form/Select/Select';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import { transformListToOptions } from '../../utils/transform_options';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import treatmentApi from '../../api/treatment';
import useApi from '../../hooks/useApi';
import LoadingSpinner from '../../components/Loader/Loader';

const ForthFormPage = () => {
	let navigate = useNavigate();
	let location = useLocation();
	const { data, error: apiErr, loading, request } = useApi(treatmentApi.recommendTreatment);
	useEffect(
		() => {
			if (data) {
				navigate('/recommend-treatment/result', { state: data });
			}
		},
		[
			data
		]
	);
	const [
		supervisor,
		setSupervisor
	] = useState('default');
	const [
		mental_health_interview,
		setMental_health_interview
	] = useState('default');
	const [
		phys_health_interview,
		setPhys_health_interview
	] = useState('default');
	const [
		mental_vs_physical,
		setMental_vs_physical
	] = useState('default');
	const [
		obs_consequence,
		setObs_consequence
	] = useState('default');

	const [
		error,
		setError
	] = useState('');

	const handleSubmit = async () => {
		if (
			supervisor === 'default' ||
			mental_health_interview === 'default' ||
			phys_health_interview === 'default' ||
			mental_vs_physical === 'default' ||
			obs_consequence === 'default'
		) {
			setError('Please choose options for each question!!');
			return;
		}

		setError('');

		const final_data = {
			...(location as any).state,
			supervisor,
			phys_health_interview,
			mental_health_interview,
			mental_vs_physical,
			obs_consequence
		};

		if (Object.keys(final_data).length != 22) {
			navigate('/recommend-treatment', { replace: true });
			return;
		}

		// console.log(final_data);

		request(final_data);
	};

	if (location.state == null) {
		return <Navigate to="/recommend-treatment" replace />;
	}

	if (loading) {
		return (
			<div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
				<LoadingSpinner />
			</div>
		);
	}

	return (
		<Layout title="Treatment Recommendation - Page 4" footer={false}>
			<React.Fragment>
				<h1 style={{ textAlign: 'center', marginTop: 100 }}>Mental Health Treatment Recommendation</h1>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<form style={{ maxWidth: 700, width: '100%' }}>
						<Select
							value={supervisor}
							inputOptions={transformListToOptions(feature_value_map['supervisor'])}
							label={feature_ques_map['supervisor']}
							onChange={(e) => setSupervisor(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={mental_health_interview}
							inputOptions={transformListToOptions(feature_value_map['mental_health_interview'])}
							label={feature_ques_map['mental_health_interview']}
							onChange={(e) => setMental_health_interview(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={phys_health_interview}
							inputOptions={transformListToOptions(feature_value_map['phys_health_interview'])}
							label={feature_ques_map['phys_health_interview']}
							onChange={(e) => setPhys_health_interview(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={mental_vs_physical}
							inputOptions={transformListToOptions(feature_value_map['mental_vs_physical'])}
							label={feature_ques_map['mental_vs_physical']}
							onChange={(e) => setMental_vs_physical(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						<Select
							value={obs_consequence}
							inputOptions={transformListToOptions(feature_value_map['obs_consequence'])}
							label={feature_ques_map['obs_consequence']}
							onChange={(e) => setObs_consequence(e.currentTarget.value)}
							placeholder="Choose that applies"
						/>
						{error && (
							<p style={{ marginTop: 20, textAlign: 'center', fontWeight: 'bold', color: ' #ff4d4d' }}>
								{error}
							</p>
						)}
						{apiErr && (
							<p style={{ marginTop: 20, textAlign: 'center', fontWeight: 'bold', color: ' #ff4d4d' }}>
								{apiErr}
							</p>
						)}
						<Button
							onClick={handleSubmit}
							title="Submit"
							style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
						/>
					</form>
				</div>
			</React.Fragment>
		</Layout>
	);
};

export default ForthFormPage;
