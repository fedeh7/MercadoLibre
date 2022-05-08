import React from "react";
import { FreeShippingIcon } from "../common/FreeShippingIcon";

import "./ProductDetailsPriceCard.scss";

export const ProductDetailsPriceCard = ({ item }) => {
	const { title, price, condition, free_shipping, sold_quantity } = item;

	const itemCondition = condition === "new" ? "Nuevo" : "Usado";
	const formattedPrice = `$ ${price?.amount?.toLocaleString()}`;

	return (
		<div className="product-details-price-card">
			<p className="product-details-sold-quantity">
				{itemCondition} - {sold_quantity} vendidos
			</p>
			<p className="product-details-title">{title}</p>
			<div className="product-details-price">
				<p className="price">{formattedPrice}</p>
				{free_shipping && <FreeShippingIcon size="large" />}
			</div>

			<button className="product-details-buy-button">Comprar</button>
		</div>
	);
};
