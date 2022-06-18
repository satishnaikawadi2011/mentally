import React from 'react';
import Benefits from '../components/Home/Benefits/Benefits';
import Hero from '../components/Home/Hero/Hero';
import Treatment from '../components/Home/Treatment/Treatment';
import Layout from '../components/Layout/Layout';
import { APP_NAME } from '../constants';

const HomePage = () => {
	return (
		<Layout title={`Hello From ${APP_NAME}`}>
			<Hero />
			<Benefits />
			<Treatment />
		</Layout>
	);
};

export default HomePage;
