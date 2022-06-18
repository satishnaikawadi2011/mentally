import React, { useState } from 'react';
import Input from './components/Form/Input/Input';
import Select from './components/Form/Select/Select';
import UnauthenticatedRoutes from './routes/unauthenticated-routes';
function App() {
	// return <UnauthenticatedRoutes />;
	// return <Input label="Email" placeholder="Enter your mail.." />;
	const [
		val,
		setVal
	] = useState('default');

	return (
		<React.Fragment>
			<Select
				label="Favourite Player"
				placeholder="Choose favourite player"
				inputOptions={{ Ronaldo: 7, Messi: 10 }}
				value={val}
				onChange={(e) => setVal(e.currentTarget.value)}
			/>
			<h1>{val}</h1>
		</React.Fragment>
	);
}

export default App;
