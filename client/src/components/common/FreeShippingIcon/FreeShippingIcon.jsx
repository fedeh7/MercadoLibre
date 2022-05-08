import React from "react";
import "./FreeShippingIcon.scss";

export const FreeShippingIcon = ({ size = "small" }) => {
	return (
		<div className={`free-shipping-icon-container ${size}`}>
			<div className="free-shipping-icon" />
		</div>
	);
};
