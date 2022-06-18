import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Result from '../../components/RecommendTreatment/Result/Result';

const ResultPage = () => {
	let location: any = useLocation();

	if (location.state == null) {
		return <Navigate to="/recommend-treatment" replace />;
	}
	return (
		<Layout title="Result">
			<Result result={location.state.treatment === 1} />
		</Layout>
	);
};

export default ResultPage;
