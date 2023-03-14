import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';

function MyRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
}

export default MyRoutes;
