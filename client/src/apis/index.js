import { ITEM_DETAILS_API, SEARCH_API } from "../constants";

const regularApiCall = ({ url }) =>
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				return response.json().then((error) => {
					throw error;
				});
			}
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw error;
		});

export const searchApi = ({ searchQuery }) => {
	const url = `${SEARCH_API}?search=${searchQuery}`;
	return regularApiCall({ url });
};

export const itemDetailsApi = ({ id }) => {
	const url = `${ITEM_DETAILS_API}${id}`;
	return regularApiCall({ url });
};
