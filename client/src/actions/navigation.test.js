import { SEARCH_RESULTS_SCREEN, ITEM_DETAILS_SCREEN } from "../constants";

import {
	navigateToItemDetails,
	navigateToHome,
	navigateToSearchResults,
} from "./navigation";

test("navigateToItemDetails navigates properly", () => {
	const navigate = jest.fn();
	const id = "123";

	const expectedCall = `${ITEM_DETAILS_SCREEN}${id}`;
	navigateToItemDetails({ navigate, id });

	expect(navigate).toHaveBeenCalledWith(expectedCall);
});

test("navigateToHome navigates properly", () => {
	const navigate = jest.fn();

	const expectedCall = "/";
	navigateToHome({ navigate });

	expect(navigate).toHaveBeenCalledWith(expectedCall);
});

test("navigateToSearchResults navigates properly", () => {
	const navigate = jest.fn();
	const userSearchBarData = "123";

	const expectedCall = `${SEARCH_RESULTS_SCREEN}?search=${userSearchBarData}`;
	navigateToSearchResults({ navigate, userSearchBarData });

	expect(navigate).toHaveBeenCalledWith(expectedCall);
});
