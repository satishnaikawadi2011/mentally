import React from 'react';
import Header from './components/Header/Header';
import Benefits from './components/Home/Benefits/Benefits';
import Hero from './components/Home/Hero/Hero';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Hero />
			<Benefits />
		</React.Fragment>
	);
}

export default App;
