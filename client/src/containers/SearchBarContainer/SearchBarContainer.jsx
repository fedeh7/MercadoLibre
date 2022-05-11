import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarLogo } from "../../components/SearchBarComponents";
import { SearchBarField } from "./../../components/SearchBarComponents";
import { navigateToSearchResults, navigateToHome } from "../../actions";

import "./SearchBarContainer.scss";

export const SearchBarContainer = ({ setBreadcrumbs }) => {
	const [userSearchBarData, setUserSearchBarData] = useState();
	const navigate = useNavigate();

	const redirectToSearchResults = () => {
		navigateToSearchResults({ navigate, userSearchBarData });
	};

	const redirectToHome = () => {
		setBreadcrumbs([]);
		navigateToHome({ navigate });
	};

	const onChange = (data) => {
		const value = data.target.value;
		setUserSearchBarData(value);
	};
	return (
		<div className="search-bar-container container">
			<div className="search-bar-content content">
				<SearchBarLogo redirectToHome={redirectToHome} />
				<SearchBarField
					onChange={onChange}
					redirectToSearchResults={redirectToSearchResults}
				/>
			</div>
		</div>
	);
};
