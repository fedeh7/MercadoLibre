import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderSpinner } from "../../components/common/LoaderSpinner/LoaderSpinner";
import { itemDeatilsAction } from "../../actions/apiCalls";
import { ErrorNotification } from "../../components/common/ErrorNotification";
import {
	ProductDetailsPicture,
	ProductDetailsPriceCard,
	ProductDetailsDescription,
} from "../../components/ProductDetailsComponents";

import "./ProductDetailsContainer.scss";
import { navigateToHome } from "../../actions";

export const ProductDetailsContainer = ({ setBreadcrumbs }) => {
	const [apiItemData, setApiItemData] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		id
			? itemDeatilsAction({
					id,
					setBreadcrumbs,
					setApiItemData,
					setErrorMessage,
			  })
			: navigateToHome({ navigate });
	}, [id, navigate, setBreadcrumbs]);

	let content = <LoaderSpinner />;

	if (errorMessage) {
		content = <ErrorNotification errorMessage={errorMessage} />;
	} else if (apiItemData) {
		content = (
			<div className="product-details-container container">
				<div className="product-details-content content">
					<div className="product-details-left-content">
						<ProductDetailsPicture
							picture={apiItemData?.item?.picture}
							title={apiItemData?.item?.title}
						/>
						<ProductDetailsDescription
							description={apiItemData?.item?.description}
						/>
					</div>
					<div className="product-details-right-content">
						<ProductDetailsPriceCard item={apiItemData?.item} />
					</div>
				</div>
			</div>
		);
	}

	return <div className="product-details-container container">{content}</div>;
};
