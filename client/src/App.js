import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
	SEARCH_RESULTS_SCREEN,
	ITEM_DETAILS_SCREEN,
	HOME_SCREEN,
} from "./constants";
import { BreadCrumbsContainer } from "./containers/BreadCrumbsContainer";
import { HomePageContainer } from "./containers/HomePageContainer";
import { ProductDetailsContainer } from "./containers/ProductDetailsContainer";

import { SearchBarContainer } from "./containers/SearchBarContainer";
import { SearchResultsContainer } from "./containers/SearchResultsContainer";

const App = () => {
	const [breadcrumbs, setBreadcrumbs] = useState();
	return (
		<>
			<SearchBarContainer setBreadcrumbs={setBreadcrumbs} />
			<BreadCrumbsContainer breadcrumbs={breadcrumbs} />

			<Routes>
				<Route
					path={HOME_SCREEN}
					element={<HomePageContainer />}
				></Route>
				<Route
					path={SEARCH_RESULTS_SCREEN}
					element={
						<SearchResultsContainer
							setBreadcrumbs={setBreadcrumbs}
						/>
					}
				></Route>
				<Route
					path={`${ITEM_DETAILS_SCREEN}:id`}
					element={
						<ProductDetailsContainer
							setBreadcrumbs={setBreadcrumbs}
						/>
					}
				></Route>
			</Routes>
		</>
	);
};

export default App;
