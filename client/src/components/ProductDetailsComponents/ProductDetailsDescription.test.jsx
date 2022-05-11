import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ProductDetailsDescription } from "./ProductDetailsDescription";

test("Product details description renders properly", () => {
	const description = "Some product description";
	const title = "Descripción del producto";
	render(<ProductDetailsDescription description={description} />);

	screen.getByText(title);
	screen.getByText(description);
});
