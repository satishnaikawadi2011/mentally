import React from 'react';
// import Footer from './components/Layout/Footer/Footer';
// import Header from './components/Header/Header';
import Benefits from './components/Home/Benefits/Benefits';
import Hero from './components/Home/Hero/Hero';
import Treatment from './components/Home/Treatment/Treatment';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<Layout title="Home">
			<Hero />
			<Benefits />
			<Treatment />
		</Layout>
	);
}

export default App;
