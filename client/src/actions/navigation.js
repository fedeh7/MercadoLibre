import { SEARCH_RESULTS_SCREEN, ITEM_DETAILS_SCREEN } from "../constants";

export const navigateToItemDetails = ({ navigate, id }) => {
	navigate(`${ITEM_DETAILS_SCREEN}${id}`);
};

export const navigateToHome = ({ navigate }) => {
	navigate("/");
};

export const navigateToSearchResults = ({ navigate, userSearchBarData }) => {
	navigate(`${SEARCH_RESULTS_SCREEN}?search=${userSearchBarData}`);
};
