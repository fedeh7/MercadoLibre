export const formatSearchApiResponse = (meliDataJson) => {
	return {
		author: { name: "Federico", lastName: "Acosta" },
		categories: getCategories(meliDataJson.filters),
		items: getItems(meliDataJson.results),
	};
};

export const formatItemApiResponse = ({
	itemData,
	itemDescription,
	itemCategories,
}) => {
	return {
		author: { name: "Federico", lastName: "Acosta" },
		categories: getRootCategories({ root: itemCategories }),
		item: {
			id: itemData.id,
			title: itemData.title,
			price: {
				currency: itemData.currency_id,
				amount: itemData.price,
				decimals: 0,
			},
			picture: securePicturesAddress(itemData.thumbnail),
			condition: itemData.condition,
			free_shipping: itemData.shipping.free_shipping,
			sold_quantity: itemData.sold_quantity,
			description: itemDescription.plain_text,
		},
	};
};

const getRootCategories = ({ root }) => {
	const rootCategories = root?.path_from_root?.map((path) => {
		return path.name;
	});

	return rootCategories;
};

const getCategories = (filters) => {
	let categories = [];

	filters.forEach((filter) => {
		if (filter.id === "category") {
			const root = filter.values[0];
			const rootCategories = getRootCategories({ root });
			categories = [...rootCategories];
		}
	});

	return categories;
};

const securePicturesAddress = (thumbnail) => {
	const newThumbnailAddress = thumbnail.startsWith("https")
		? thumbnail
		: thumbnail.replace("http", "https");

	return newThumbnailAddress;
};

const getItems = (results) => {
	const items = results.map((result) => {
		return {
			id: result.id,
			title: result.title,
			state: result.address.state_name,
			city: result.address.city_name,
			price: {
				currency: result.currency_id,
				amount: result.price,
				decimals: 0,
			},
			picture: securePicturesAddress(result.thumbnail),
			condition: result.condition,
			free_shipping: result.shipping.free_shipping,
		};
	});
	return items;
};
