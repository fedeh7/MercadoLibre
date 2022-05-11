import fetch from "node-fetch";

export const mercadolibreSearchApiCall = ({ searchQuery }) =>
	fetch(
		`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=4`
	)
		.then((data) => data.json())
		.then((dataJson) => dataJson);

export const mercadolibreDetailsApiCall = ({ id }) =>
	fetch(`https://api.mercadolibre.com/items/${id}`)
		.then((data) => data.json())
		.then((dataJson) => dataJson);

export const mercadolibreItemDescriptionApiCall = ({ id }) =>
	fetch(`https://api.mercadolibre.com/items/${id}/description`)
		.then((data) => data.json())
		.then((dataJson) => dataJson);

export const mercadolibreItemCategoriesApiCall = ({ category_id }) =>
	fetch(`https://api.mercadolibre.com/categories/${category_id}`)
		.then((data) => data.json())
		.then((dataJson) => dataJson);
