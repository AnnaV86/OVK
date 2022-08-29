import React, { FC } from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header, Main, Page2 } from './components';

export const App: FC = () => {
	return (
		<BrowserRouter>
			<div className="page">
				<Header />
				<Routes>
					<Route path="/page" element={<Page2 />} />
					<Route path="/" element={<Main />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};
