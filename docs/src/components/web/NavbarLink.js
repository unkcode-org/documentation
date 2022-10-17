import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ children, ...props }) => {
	const isActive = window.location.pathname === props.to;

	return (
		<Link className={`nav-link ${isActive ? "active" : ""}`} to={props.to}>
			{children}
		</Link>
	);
};

export default NavbarLink;
