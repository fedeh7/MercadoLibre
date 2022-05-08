import React from "react";

import "./BreadCrumbsContainer.scss";

export const BreadCrumbsContainer = ({ breadcrumbs }) => {
	let breadcrumbsString = "";
	let activeCrumb = null;
	if (breadcrumbs) {
		breadcrumbs.forEach((crumb, counter) => {
			if (counter + 1 === breadcrumbs.length) {
				activeCrumb = (
					<span className="breadcrumbs-active">{crumb}</span>
				);
			} else {
				breadcrumbsString = breadcrumbsString + crumb + " > ";
			}
		});
	}

	return (
		<div className="breadcrumbs-container container">
			<div className="breadcrumbs-content content">
				<p>
					{breadcrumbsString}
					{activeCrumb}
				</p>
			</div>
		</div>
	);
};
