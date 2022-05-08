import React from "react";
import { SearchBarButton } from "./SearchBarButton";

import "./SearchBarField.scss";

export const SearchBarField = ({ onChange, redirectToSearchResults }) => {
	const onFormSubmit = (event) => {
		event.preventDefault();
		redirectToSearchResults();
	};
	return (
		<form className="search-bar-field" onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Nunca dejes de buscar"
				onChange={onChange}
			/>
			<SearchBarButton />
		</form>
	);
};
