import PageNotFound from "components/errors/404";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" exact element={<p>Hello</p>} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default AppRoutes;
