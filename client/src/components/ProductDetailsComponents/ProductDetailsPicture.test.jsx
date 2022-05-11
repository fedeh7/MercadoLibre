import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ProductDetailsPicture } from "./ProductDetailsPicture";

test("Product details picture renders properly", () => {
	const picture = "https://www.url.com/picture.png";
	const title = "Descripción del producto";
	render(<ProductDetailsPicture picture={picture} title={title} />);

	const image = screen.getByAltText(title);
	expect(image.getAttribute("src")).toEqual(picture);
});
