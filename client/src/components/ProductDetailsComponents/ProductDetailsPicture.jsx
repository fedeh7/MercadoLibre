import React from "react";

import "./ProductDetailsPicture.scss";

export const ProductDetailsPicture = ({ picture, title }) => {
	return (
		<div className="product-details-picture">
			<img src={picture} alt={title} className="picture" />
		</div>
	);
};
