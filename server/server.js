import express from "express";
import fetch from "node-fetch";
import { formatSearchApiResponse, formatItemApiResponse } from "./utils.js";

const app = express();

app.get("/api/items", async (req, res) => {
	try {
		const searchQuery = req.query.search;
		const searchData = await fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=4`
		)
			.then((data) => data.json())
			.then((dataJson) => formatSearchApiResponse(dataJson));

		res.status(200).send(searchData);
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
		const itemData = await fetch(`https://api.mercadolibre.com/items/${id}`)
			.then((data) => data.json())
			.then((dataJson) => dataJson);

		const itemDescription = await fetch(
			`https://api.mercadolibre.com/items/${id}/description`
		)
			.then((data) => data.json())
			.then((dataJson) => dataJson);

		const category_id = itemData.category_id;
		const itemCategories = await fetch(
			`https://api.mercadolibre.com/categories/${category_id}`
		)
			.then((data) => data.json())
			.then((dataJson) => dataJson);

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
