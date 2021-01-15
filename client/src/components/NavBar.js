import React from "react";

const Navbar = (props) => {
	const toggleMode = (e) => {
		e.preventDefault();
		props.setDarkMode(!props.darkMode);
	};
	return (
		<nav className="navbar">
			<h1>
				React Plants{" "}
				<span role="img" aria-label="A Leaf">
					🌿
				</span>
			</h1>
			<div className="toggle_indicator">
				<span role="img" aria-label="The Sun">
					☀️
				</span>
				<div className="dark-mode__toggle">
					<div
						onClick={toggleMode}
						className={props.darkMode ? "toggle toggled" : "toggle"}
					/>
				</div>
				<span role="img" aria-label="The Moon">
					🌙
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
