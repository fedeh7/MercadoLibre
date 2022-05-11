import React from "react";

import "./HomePageContainer.scss";

export const HomePageContainer = () => {
	return (
		<div className="homepage-container container">
			<div className="homepage-content content">
				<h1>Home Page</h1>
				<h2>Busque algo para iniciar</h2>

				<h3>Implementaciones</h3>

				<p>- Apis con Express</p>
				<p>- Barra de busqueda</p>
				<p>- Pantalla de resultados de busqueda</p>
				<p>- Pantalla de detalles del item</p>
				<p>- Breadcrumbs</p>
				<p>- Loading spinner</p>
				<p>- Mensajes de error (en caso de que la api falle)</p>
				<p>- Testing de componentes</p>
				<p>- Testing de funciones</p>
			</div>
		</div>
	);
};
