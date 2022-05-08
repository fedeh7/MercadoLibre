import React from "react";

import "./ProductDetailsPicture.scss";

export const ProductDetailsPicture = ({ picture }) => {
	return (
		<div className="product-details-picture">
			<img src={picture} alt="asd" className="picture" />
		</div>
	);
};
