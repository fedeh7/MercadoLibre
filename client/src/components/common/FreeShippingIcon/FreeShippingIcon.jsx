import React from "react";
import "./FreeShippingIcon.scss";

export const FreeShippingIcon = ({ size = "small" }) => {
	return (
		<div
			className={`free-shipping-icon-container ${size}`}
			data-testid="free-shipping-icon"
		>
			<div className="free-shipping-icon" />
		</div>
	);
};
