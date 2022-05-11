import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBarField } from "./SearchBarField";

test("Search bar field renders properly", () => {
	const onChange = jest.fn();
	const redirectToSearchResults = jest.fn();
	render(
		<SearchBarField
			onChange={onChange}
			redirectToSearchResults={redirectToSearchResults}
		/>
	);

	const inputField = screen.getByPlaceholderText("Nunca dejes de buscar");

	const mockedSearchValue = "something";
	userEvent.click(inputField);
	userEvent.keyboard(mockedSearchValue);

	expect(onChange).toHaveBeenCalledTimes(9);

	userEvent.keyboard("{Enter}");

	expect(redirectToSearchResults).toHaveBeenCalled();
});
