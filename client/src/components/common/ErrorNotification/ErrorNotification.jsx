import React from "react";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../../../actions";

import "./ErrorNotification.scss";

export const ErrorNotification = ({ errorMessage }) => {
	const navigate = useNavigate();

	const redirectHome = () => {
		navigateToHome({ navigate });
	};

	return (
		<div className="error-notification-container">
			<h1>Error</h1>
			<p>{errorMessage}</p>
			<button onClick={redirectHome}>Home</button>
		</div>
	);
};
