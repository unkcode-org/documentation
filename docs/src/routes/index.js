import PageNotFound from "components/errors/404";
import BecomeDev from "pages/BecomeDev";
import FAQ from "pages/FAQ";
import Introduction from "pages/Introduction";
import Security from "pages/Security";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" exact element={<Introduction />} />
			<Route path="/security" exact element={<Security />} />
			<Route path="/become-dev" exact element={<BecomeDev />} />
			<Route path="/faq" exact element={<FAQ />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default AppRoutes;
