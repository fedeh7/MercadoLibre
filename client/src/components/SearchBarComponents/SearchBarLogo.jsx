import React from "react";
import Logo from "./../../assets/Logo_ML@2x.png.png";

import "./SearchBarLogo.scss";

export const SearchBarLogo = ({ redirectToHome }) => {
	return (
		<div className="search-bar-logo" onClick={redirectToHome}>
			<img src={Logo} alt="Meli Logo" />
		</div>
	);
};
