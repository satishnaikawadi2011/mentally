import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages';
import NotFoundPage from '../pages/not-found';
import RecommendTreatmentPage from '../pages/recommend-treatment';
import FirstFormPage from '../pages/recommend-treatment/1';
import SecondFormPage from '../pages/recommend-treatment/2';
import ThirdFormPage from '../pages/recommend-treatment/3';
import ForthFormPage from '../pages/recommend-treatment/4';

type RoutePathType =
	| '/'
	| '/recommend-treatment'
	| '/recommend-treatment/1'
	| '/recommend-treatment/2'
	| '/recommend-treatment/3'
	| '/recommend-treatment/result'
	| '/recommend-treatment/4';

export interface RouteType {
	path: RoutePathType;
	element: JSX.Element;
}

const ClientRoutes: RouteType[] = [
	{ path: '/', element: <HomePage /> },
	{ path: '/recommend-treatment', element: <RecommendTreatmentPage /> },
	{ path: '/recommend-treatment/1', element: <FirstFormPage /> },
	{ path: '/recommend-treatment/2', element: <SecondFormPage /> },
	{ path: '/recommend-treatment/3', element: <ThirdFormPage /> },
	{ path: '/recommend-treatment/4', element: <ForthFormPage /> }
];

const UnauthenticatedRoutes = () => {
	return (
		<Router>
			<Routes>
				{ClientRoutes.map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
};

export default UnauthenticatedRoutes;
