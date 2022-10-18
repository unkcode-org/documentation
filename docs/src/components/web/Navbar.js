import React from "react";
import NavbarLink from "./NavbarLink";
import sidebarData from "config/sidebar.json";
import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<ul className="nav flex-column">
			{sidebarData.map((section, key) => {
				if (section.subMenu) {
					return (
						<li className="nav-item" key={key}>
							<NavbarLink to={section.route}>{section.label}</NavbarLink>
							<ul className="nav flex-column">
								{section.subMenuData.map((subSection, subKey) => {
									return (
										<li className="nav-item " key={subKey}>
											<Link className="nav-link" to={subSection.section.toString()} smooth={true} duration={500} spy={true} exac="true" offset={-90}>
												{subSection.label}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
					);
				}

				return (
					<li className="nav-item" key={key}>
						<NavbarLink to={section.route}>{section.label}</NavbarLink>
					</li>
				);
			})}
		</ul>
	);
};

export default Navbar;
