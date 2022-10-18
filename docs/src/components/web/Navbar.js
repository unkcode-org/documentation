import React from "react";
import NavbarLink from "./NavbarLink";
import sidebarData from "config/sidebar.json";

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
										<li className="nav-item" key={subKey}>
											<a className="nav-link" href={subSection.section}>
												{subSection.label}
											</a>
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
