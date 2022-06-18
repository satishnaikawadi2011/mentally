import React, { useState } from 'react';
import ThirdFormPage from './pages/recommend-treatment/3';
import ForthFormPage from './pages/recommend-treatment/4';
import UnauthenticatedRoutes from './routes/unauthenticated-routes';

function App() {
	return <UnauthenticatedRoutes />;
	// return <ForthFormPage />;
	// return <Input label="Email" placeholder="Enter your mail.." />;
	// const [
	// 	val,
	// 	setVal
	// ] = useState('default');

	// return (
	// 	<React.Fragment>
	// 		<Select
	// 			label="Favourite Player"
	// 			placeholder="Choose favourite player"
	// 			inputOptions={{ Ronaldo: 7, Messi: 10 }}
	// 			value={val}
	// 			onChange={(e) => setVal(e.currentTarget.value)}
	// 		/>
	// 		<h1>{val}</h1>
	// 	</React.Fragment>
	// );
}

export default App;
