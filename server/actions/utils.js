export const formatSearchApiResponse = ({ searchData }) => {
	return {
		author: { name: "Federico", lastName: "Acosta" },
		categories: getCategories(searchData?.filters),
		items: getItems(searchData?.results),
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
			...getItem(itemData),
			description: itemDescription?.plain_text,
		},
	};
};

export const getRootCategories = ({ root }) => {
	const rootCategories = root?.path_from_root?.map((path) => {
		return path?.name;
	});

	return rootCategories;
};

export const getCategories = (filters) => {
	let categories = [];

	filters.forEach((filter) => {
		if (filter?.id === "category") {
			const root = filter?.values[0];
			const rootCategories = getRootCategories({ root });
			categories = [...rootCategories];
		}
	});

	return categories;
};

export const securePicturesAddress = (thumbnail) => {
	const newThumbnailAddress = thumbnail?.startsWith("https")
		? thumbnail
		: thumbnail.replace("http", "https");

	return newThumbnailAddress;
};

export const getItems = (results) => {
	const items = results.map((result) => {
		return {
			...getItem(result),
		};
	});
	return items;
};

export const getItem = (itemData) => {
	return {
		id: itemData?.id,
		title: itemData?.title,
		price: {
			currency: itemData?.currency_id,
			amount: itemData?.price,
			decimals: 0,
		},
		picture: securePicturesAddress(itemData?.thumbnail),
		condition: itemData?.condition,
		free_shipping: itemData?.shipping?.free_shipping,
		sold_quantity: itemData?.sold_quantity,
		state: itemData?.address?.state_name,
		city: itemData?.address?.city_name,
	};
};
