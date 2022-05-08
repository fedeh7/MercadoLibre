import { searchApi, itemDetailsApi } from "../apis";

export const searchAction = ({
	searchQuery,
	setBreadcrumbs,
	setApiSearchData,
	setErrorMessage,
}) =>
	searchApi({ searchQuery })
		.then((response) => {
			setBreadcrumbs(response.categories);
			setApiSearchData(response);
			setErrorMessage("");
		})
		.catch((error) => {
			setBreadcrumbs([]);
			setErrorMessage(error.errorMessage);
		});

export const itemDeatilsAction = ({
	id,
	setBreadcrumbs,
	setApiItemData,
	setErrorMessage,
}) =>
	itemDetailsApi({ id })
		.then((response) => {
			setBreadcrumbs(response.categories);
			setApiItemData(response);
			setErrorMessage("");
		})
		.catch((error) => {
			setBreadcrumbs([]);
			setErrorMessage(error.errorMessage || "Error desconocido");
		});
