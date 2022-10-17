import React from "react";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
	return (
		<ul className="nav flex-column">
			<li className="nav-item">
				<NavbarLink to="/">Getting Started</NavbarLink>
				<ul className="nav flex-column">
					<li className="nav-item">
						<a className="nav-link" href="#idocs_installation">
							Installation
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_html_structure">
							HTML Structure
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_sass">
							Sass
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_color_schemes">
							Color Schemes
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_theme_customization">
							Customization
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_logo_settings">
							Logo Settings
						</a>
					</li>
				</ul>
			</li>
			<li className="nav-item">
				<NavbarLink to="/security">Security Handlers</NavbarLink>
				<ul className="nav flex-column">
					<li className="nav-item">
						<a className="nav-link" href="#idocs_header">
							Header
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_navbar">
							Navbar
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_sidebar">
							Sidebar
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_footer">
							Footer
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#idocs_box_layout">
							Box Layout
						</a>
					</li>
				</ul>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#idocs_faq">
					FAQ
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#idocs_support">
					Support
				</a>
			</li>
		</ul>
	);
};

export default Navbar;
