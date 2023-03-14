import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from './Routes';
import NavBar from './NavBar/NavBar';

function App() {
	return (
		<div className="App">
			{/* <NavBar /> */}
			<MyRoutes />
		</div>
	);
}

export default App;
