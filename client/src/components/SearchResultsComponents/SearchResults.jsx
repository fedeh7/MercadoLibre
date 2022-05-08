import React from "react";
import { SearchResultsItem } from "./SearchResultsItem";

import "./SearchResults.scss";

export const SearchResults = ({ items, redirectToItemDetails }) => {
	return (
		<div className="search-results">
			{items?.map((item, counter) => {
				return (
					<div key={counter}>
						<SearchResultsItem
							item={item}
							redirectToItemDetails={redirectToItemDetails}
						/>
						{counter + 1 < items.length && <hr />}
					</div>
				);
			})}
		</div>
	);
};
