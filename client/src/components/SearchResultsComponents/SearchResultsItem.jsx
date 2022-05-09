import React from "react";
import { FreeShippingIcon } from "../common/FreeShippingIcon";

import "./SearchResultsItem.scss";

const PriceWithIcon = ({ shipping, price }) => {
	const formattedPrice = `$ ${price.amount.toLocaleString()}`;
	return (
		<div className="price-and-shipping-icon">
			<p className="price">{formattedPrice}</p>
			{shipping && <FreeShippingIcon />}
		</div>
	);
};

const ItemInfo = ({ title, condition }) => {
	const conditionMessage = condition === "new" ? "Nuevo!" : "Usado";
	return (
		<div className="title-and-condition">
			<p className="title">{title}</p>
			<p className="condition">{conditionMessage}</p>
		</div>
	);
};

const SellerLocation = ({ city, state }) => {
	return (
		<p>
			{city} - {state}
		</p>
	);
};

export const SearchResultsItem = ({ item, redirectToItemDetails }) => {
	const { state, city, condition, free_shipping, id, picture, price, title } =
		item;

	const onClick = () => {
		redirectToItemDetails(id);
	};

	return (
		<div className="search-results-item" onClick={onClick}>
			<div className="search-results-item-picture">
				<img src={picture} alt={title} className="picture" />
			</div>
			<div className="search-results-item-info">
				<PriceWithIcon shipping={free_shipping} price={price} />
				<ItemInfo title={title} condition={condition} />
			</div>
			<div className="search-results-item-city">
				<SellerLocation state={state} city={city} />
			</div>
		</div>
	);
};
