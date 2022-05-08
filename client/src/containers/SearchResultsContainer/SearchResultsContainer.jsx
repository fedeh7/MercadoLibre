import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { LoaderSpinner } from "../../components/common/LoaderSpinner/LoaderSpinner";
import { SearchResults } from "../../components/SearchResultsComponents";
import { ErrorNotification } from "../../components/common/ErrorNotification";
import { searchAction } from "../../actions/apiCalls";
import { navigateToItemDetails, navigateToHome } from "./../../actions";

import "./SearchResultsContainer.scss";

export const SearchResultsContainer = ({ setBreadcrumbs }) => {
	const [searchparams] = useSearchParams();
	const [apiSearchData, setApiSearchData] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const searchQuery = searchparams.get("search");
	const navigate = useNavigate();

	useEffect(() => {
		searchQuery
			? searchAction({
					searchQuery,
					setApiSearchData,
					setBreadcrumbs,
					setErrorMessage,
			  })
			: navigateToHome({ navigate });
	}, [navigate, searchQuery, setBreadcrumbs]);

	const redirectToItemDetails = (id) => {
		navigateToItemDetails({ navigate, id });
	};

	let content = <LoaderSpinner />;

	if (errorMessage) {
		content = <ErrorNotification errorMessage={errorMessage} />;
	} else if (apiSearchData) {
		content = (
			<div className="search-results-content content">
				<SearchResults
					items={apiSearchData?.items}
					redirectToItemDetails={redirectToItemDetails}
				/>
			</div>
		);
	}

	return <div className="search-results-container container">{content}</div>;
};
