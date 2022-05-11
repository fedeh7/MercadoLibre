import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { SearchBarLogo } from "./SearchBarLogo";
import userEvent from "@testing-library/user-event";

test("Search bar logo works properly", () => {
	const redirectToHome = jest.fn();
	render(<SearchBarLogo redirectToHome={redirectToHome} />);

	userEvent.click(screen.getByAltText("Meli Logo"));

	expect(redirectToHome).toHaveBeenCalled();
});
