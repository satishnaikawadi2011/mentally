import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Benefits from './components/Home/Benefits/Benefits';
import Hero from './components/Home/Hero/Hero';
import Treatment from './components/Home/Treatment/Treatment';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Hero />
			<Benefits />
			<Treatment />
			<Footer />
		</React.Fragment>
	);
}

export default App;
