# Code Challenge de FE para Mercadolibre

La app cuenta con pantallas de barra de busqueda, resultados de busqueda y detalles de producto

## Instrucciones para probarla

Para probar la app es muy sencillo:

-   Clona el repositorio con esta url 'https://github.com/fedeh7/MercadoLibre.git'
-   Abrir una terminal y navegar al deirectorio de server
-   Abrir otra terminal y navegar al deirectorio de cliente
-   En ambas terminales correr el comando npm run start

Hecho esto un tab del navegador deberia abrirse con la direcion de localhost:3000 y la app ya esta lista para probar

## Tecnologias

Cliente -> Se utilizo React, Sass y se hizo testing con react testing library y jest

Servidor -> Se utilizo Express para la creacion de las apis y se hizo testing con jest

## Estructura de la aplicacion

La app esta dividida en dos partes

-   Cliente
-   Servidor

### Cliente

El cliente posee 3 pantallas principales:

-   Barra de busqueda (/)
-   Resultados de busqueda (/items?search=)
-   Detalles del producto (/items/:id)

La barra de busqueda es constante en todas las pantallas y cada una de ellas cuenta con su propia url

#### Estructura del Cliente

Todos los componentes fueron atomizados para poder ser reutilizados en donde se requiera y cada componente tiene su propio archivo scss para estilarlo.

Las pantallas principales tienen sus propios Contenedores donde ensamblan la vista importando los componentes que nesesiten, en este caso la mayoria de los componentes solo son utilizados una ves por su contenedor padre, es por esta razon que dentro del directorio de componentes se crearon directorios con los nombres de las pantallas en las que esos componentes son utilizados.

Algunos componentes sin embargo puede ser utilizados en varias pantallas distintas, estos componentes son comunes asi que fueron creados en el directorio components/commons.

Las distintas acciones que los componentes pueden hacer, como redireccionar o llamar apis fueron creadas en dentro del directorio de actions, para que cualquier componente pueda importar dicha funcionalidad si lo nesesita.

Los fetch a las apis fueron creadas en su propio directorio de apis por la misma razon que las actions.

#### Barra de busqueda

La barra de busqueda se encarga de generar la url correspondiente a la busqueda que el usuario desea hacer, posee el logo de la marca el cual al clickearlo devuelve al Home de la aplicacion.

Al hacer una busqueda se hace una redireccion a la pantalla de resultados de busqueda, con los string params en la url de esta forma '/items?search=busqueda'.
La busqueda se puede disparar tanto con la tecla Enter como clickeando en el boton con icono de lupa.

#### Resultados de la busqueda

Esta pantalla muestra los resultados de la busqueda realizada.

En el momento en el esta pantalla se renderiza se hace una llamada a la api de busqueda, donde se utilizan los string params que esten en la url para completar la url de la api.

Mientras la aplicacion espera la respuesta de la Api se renderisa un spinner para indicarle al usuario que estamos esperando la informacion, si la Api respondiera con un error en este punto de la ejecucion, se renderiza un mensaje de error indicandole al usuario que algo salio mal.

Si la respuesta de la api es exitosa se muestran los componentes correspondientes para formar la pantalla de resultados de busqueda.

Cada uno de los items que se muestran se pueden clickear para navegar a la pantalla de detalles del producto, esta navegacion se hace de la misma manera que la de resultados de busqueda, se hace una redireccion con el id del producto como parametro de la url de esta forma 'items/id'.

#### Detalles del producto

Esta pantalla muestra los detalles del producto seleccionado.

En el momento en el que esta pantalla se renderiza se hace una llamada a la api de detalles, donde se usa el id de la url para completar la url de la api.

De la misma forma que la pantalla de resultados de busqueda, mientras la aplicacion espera la respuesta de la Api se renderisa un spinner para indicarle al usuario que estamos esperando la informacion, si la Api respondiera con un error en este punto de la ejecucion, se renderiza un mensaje de error indicandole al usuario que algo salio mal.

### Servidor

El servidor es mas chico que el cliente y su estructura es mas simple, cuenta solo con un directorio de actions, donde todas las acciones de las apis que se exponen fueron creadas en caso de que en el futuro puedan ser reutilizadas por nuevas apis.

Se crearon 2 apis, una para la busqueda y otra para los detalles del producto, cada una llama a las apis de mercadolibre propuestas por el documento del challenge

## Objetivos del challenge

Tenés que usar el siguiente stack tecnológico para construir la aplicación:

-   Cliente:
    -   HTML
    -   JS (Deseable utilizar React o Backbone)
    -   CSS (Deseable utilizar Sass)
-   Servidor:
    -   Node >= 6
    -   Express

Para resolverlo, te pedimos que tengas en cuenta:

-   Usabilidad
-   SEO
-   Performance
-   Escalabilidad
-   Te pedimos:
-   En base a los diseños dados, construir las siguientes tres vistas:
    -   Caja de búsqueda
    -   Resultados de la búsqueda
    -   Detalle del producto
-   Las vistas son navegables de manera independiente y cuentan con su propia url:

    -   Caja de Búsqueda: “/”
    -   Resultados de la búsqueda: “/items?search=”
    -   Detalle del producto: “/items/:id”

-   Construir los siguientes endpoints para ser utilizados desde las vistas:

```
/api/items?q=​:query

```

Debe consultar el siguiente endpoint: <https://api.mercadolibre.com/sites/MLA/search?q=:query>

Y devolver los resultados en el formato indicado:

```
{
  “author”: {
    “name”: String,
    “lastname”: String
    },
  "categories": [String, String, String, ...],
  "items": [
    {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
        },
      “picture”: String,
      "condition": String,
      "free_shipping": Boolean,
    },

    {...},
    {...},
    {...}
    ]
}
```

```
/api/items/:id
```

Debe consultar los siguientes endpoints:

-   <https://api.mercadolibre.com/items/:id>
-   <https://api.mercadolibre.com/items/:id/description>

Y devolver los resultados en el formato indicado:

```
{
“author”: {
  “name”: String,
  “lastname”: String
  },
“item”: {
  "id": String,
  "title": String,
  "price": {
    "currency": String,
    "amount": Number,
    "decimals": Number,
    },
  “picture”: String,
  "condition": String,
  "free_shipping": Boolean,
  "sold_quantity", Number
  "description": String
  }
}
```

Especificaciones :

Barra de busqueda
![Specs_Buscador](https://user-images.githubusercontent.com/48955312/167502603-b579975d-c05f-4520-8005-f4a21c402616.png)

Resultados
![Specs_Resultados](https://user-images.githubusercontent.com/48955312/167502636-7e231d9c-a39b-4809-bb81-09c478d5a485.png)

Detalle
![Specs_Detalle](https://user-images.githubusercontent.com/48955312/167502626-efa12f15-08e3-4d92-9ac8-408e4c97a429.png)
