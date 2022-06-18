import React from 'react';
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
		</React.Fragment>
	);
}

export default App;
