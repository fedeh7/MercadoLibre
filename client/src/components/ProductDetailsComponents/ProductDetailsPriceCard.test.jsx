import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ProductDetailsPriceCard } from "./ProductDetailsPriceCard";

test("Product details price information renders properly", () => {
	const item = {
		title: "item title",
		price: { amount: 12345 },
		condition: "new",
		free_shipping: true,
		sold_quantity: 5,
	};

	render(<ProductDetailsPriceCard item={item} />);

	const localizedPrice = item.price.amount.toLocaleString();

	const expectedConditionString = `Nuevo - ${item.sold_quantity} vendidos`;
	const expectedPriceString = `$ ${localizedPrice}`;

	screen.getByText(expectedConditionString);
	screen.getByText(expectedPriceString);
	screen.getByText("item title");
	screen.getByTestId("free-shipping-icon");
});
