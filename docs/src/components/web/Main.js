import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import Navbar from "./Navbar";
const Main = ({ children }) => {
	const [activeNav, setActiveNav] = useState(false);

	return (
		<div id="main-wrapper">
			<header id="header" className="sticky-top">
				<nav className="primary-menu navbar navbar-expand-lg navbar-dropdown-dark">
					<div className="container-fluid">
						<button id="sidebarCollapse" className="navbar-toggler d-block d-md-none" onClick={() => setActiveNav((prev) => !prev)}>
							<span></span>
							<span className="w-75"></span>
							<span className="w-50"></span>
						</button>

						<div className="row logo ml-md-3">
							<h4 className="mt-4">
								UNKCode <b>Docs</b>
							</h4>
						</div>

						<ul className="social-icons social-icons-lg ml-lg-2 mr-2">
							<li>
								<a data-toggle="tooltip" href="https://unkcode.com/" target="_blank" rel="noreferrer" title="" data-original-title="Home">
									<IoIosHome />
								</a>
							</li>
							<li>
								<a data-toggle="tooltip" href="https://github.com/unkcode-org/" target="_blank" rel="noreferrer" title="" data-original-title="Github">
									<BsGithub />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>

			<div id="content" role="main">
				<div className={`idocs-navigation bg-light ${activeNav ? "active" : ""}`}>
					<Navbar />
				</div>

				<div className="idocs-content">
					<div className="container">{children}</div>
				</div>
			</div>
			<footer id="footer" className="section h-50 bg-dark footer-text-light">
				<p className="text-center">
					Copyright &copy; 2019 - {new Date().getFullYear()} <a href="https://unkcode.com">UNKCode</a>. All Rights Reserved.
				</p>
			</footer>
		</div>
	);
};

export default Main;
