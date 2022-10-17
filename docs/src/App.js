import { useLayoutEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

function App() {
	return (
		<Router>
			<Wrapper>
				<AppRoutes />
			</Wrapper>
		</Router>
	);
}

export default App;
