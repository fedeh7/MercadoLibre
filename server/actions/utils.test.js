import {
	formatSearchApiResponse,
	formatItemApiResponse,
	getRootCategories,
	getCategories,
	securePicturesAddress,
	getItems,
	getItem,
} from "./utils.js";

describe("utils tests", () => {
	const mockedRootCategories = {
		id: "some id",
		path_from_root: [
			{ name: "something" },
			{ name: "something else" },
			{ name: "another thing" },
			{ name: "last thing" },
		],
	};
	const mockedFilters = [
		{
			id: "category",
			values: [mockedRootCategories],
		},
		{
			id: "other id",
			values: [
				{
					id: "other id",
				},
			],
		},
	];

	const mockedItemOne = {
		id: "item id",
		title: "Item title",
		price: 12345,
		currency_id: "ARS",
		condition: "new",
		thumbnail: "http://someurl.jpg",
		address: {
			state_name: "State",
			city_name: "City",
		},
		shipping: { free_shipping: true },
		category_id: "category id",
		sold_quantity: 123,
	};

	const mockedItemTwo = {
		id: "other item id",
		title: "other Item title",
		price: 99,
		currency_id: "ARS",
		condition: "used",
		thumbnail: "http://someurlagain.jpg",
		address: {
			state_name: "Other State",
			city_name: "Other City",
		},
		shipping: { free_shipping: false },
		category_id: "category id 2",
		sold_quantity: 321,
	};
	const mockedItems = [mockedItemOne, mockedItemTwo];

	const mockedDescription = { plainText: "description" };

	const expectedFilters = [
		"something",
		"something else",
		"another thing",
		"last thing",
	];

	const expectedItemOne = {
		id: "item id",
		title: "Item title",
		state: "State",
		city: "City",
		price: {
			currency: "ARS",
			amount: 12345,
			decimals: 0,
		},
		picture: "https://someurl.jpg",
		condition: "new",
		free_shipping: true,
		sold_quantity: 123,
	};

	const expectedItemTwo = {
		id: "other item id",
		title: "other Item title",
		state: "Other State",
		city: "Other City",
		price: {
			currency: "ARS",
			amount: 99,
			decimals: 0,
		},
		picture: "https://someurlagain.jpg",
		condition: "used",
		free_shipping: false,
		sold_quantity: 321,
	};

	const expectedItems = [expectedItemOne, expectedItemTwo];

	test("formatSearchApiResponse works properly", () => {
		const mockedSearchData = {
			filters: mockedFilters,
			results: mockedItems,
		};
		const expectedResult = {
			author: { name: "Federico", lastName: "Acosta" },
			categories: expectedFilters,
			items: expectedItems,
		};
		const result = formatSearchApiResponse({
			searchData: mockedSearchData,
		});

		expect(result).toEqual(expectedResult);
	});

	test("formatItemApiResponse works properly", () => {
		const mockedDetailsData = {
			itemData: mockedItemOne,
			itemDescription: mockedDescription,
			itemCategories: mockedRootCategories,
		};
		const expectedResult = {
			author: { name: "Federico", lastName: "Acosta" },
			categories: expectedFilters,
			item: expectedItemOne,
		};
		const result = formatItemApiResponse(mockedDetailsData);

		expect(result).toEqual(expectedResult);
	});

	test("getRootCategories works properly", () => {
		const result = getRootCategories({ root: mockedRootCategories });

		expect(result).toEqual(expectedFilters);
	});
	test("getCategories works properly", () => {
		const result = getCategories(mockedFilters);

		expect(result).toEqual(expectedFilters);
	});

	test("securePicturesAddress works properly", () => {
		const result = securePicturesAddress("http//www.url.com");

		expect(result).toEqual("https//www.url.com");
	});
	test("getItems works properly", () => {
		const result = getItems(mockedItems);

		expect(result).toEqual(expectedItems);
	});
	test("getItem works properly", () => {
		const result = getItem(mockedItemTwo);

		expect(result).toEqual(expectedItemTwo);
	});
});
