import express from "express";
import {
	mercadolibreSearchApiCall,
	mercadolibreDetailsApiCall,
	mercadolibreItemDescriptionApiCall,
	mercadolibreItemCategoriesApiCall,
} from "./actions/apiCalls.js";
import {
	formatSearchApiResponse,
	formatItemApiResponse,
} from "./actions/utils.js";

const app = express();

app.get("/api/items", async (req, res) => {
	try {
		const searchQuery = req.query.search;
		const searchData = await mercadolibreSearchApiCall({ searchQuery });

		const formattedSearchData = formatSearchApiResponse({ searchData });
		res.status(200).send(formattedSearchData);
	} catch {
		res.status(500).send({
			errorMessage:
				"Algo salio mal tratando de traer los resultados de la busqueda",
		});
	}
});

app.get("/api/items/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const itemData = await mercadolibreDetailsApiCall({ id });

		const itemDescription = await mercadolibreItemDescriptionApiCall({
			id,
		});

		const category_id = itemData.category_id;
		const itemCategories = await mercadolibreItemCategoriesApiCall({
			category_id,
		});

		const formattedData = formatItemApiResponse({
			itemData,
			itemDescription,
			itemCategories,
		});

		res.status(200).send(formattedData);
	} catch {
		res.status(500).send({
			errorMessage: "Algo salio mal tratando de traer los datos del item",
		});
	}
});

app.listen(5000, () => {
	console.log("Server started on por 5000");
});
