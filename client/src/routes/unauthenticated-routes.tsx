import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages';

type RoutePathType = '/';

export interface RouteType {
	path: RoutePathType;
	element: JSX.Element;
}

const ClientRoutes: RouteType[] = [
	{ path: '/', element: <HomePage /> }
];

const UnauthenticatedRoutes = () => {
	return (
		<Router>
			<Routes>
				{ClientRoutes.map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
			</Routes>
		</Router>
	);
};

export default UnauthenticatedRoutes;
