import React from "react";

import "./ProductDetailsDescription.scss";

export const ProductDetailsDescription = ({ description }) => {
	return (
		<div className="product-details-description">
			<h1 className="product-details-description-title">
				Descripción del producto
			</h1>

			<p className="description">{description}</p>
		</div>
	);
};
