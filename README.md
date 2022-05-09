# MercadoLibre
Code Challenge de FE para Mercadolibre


Objetivo (Copiado del PDF):

Tenés que usar el siguiente stack tecnológico para construir la aplicación: 
  - Cliente:
    - HTML
    - JS (Deseable utilizar React o Backbone)
    - CSS (Deseable utilizar Sass)
  - Servidor:
    - Node >= 6
    - Express

Para resolverlo, te pedimos que tengas en cuenta:
  - Usabilidad
  - SEO
  - Performance 
  - Escalabilidad
  - 
Te pedimos:
  - En base a los diseños dados, construir las siguientes tres vistas:
    - Caja de búsqueda
    - Resultados de la búsqueda
    - Detalle del producto
  - Las vistas son navegables de manera independiente y cuentan con su propia url:
    - Caja de Búsqueda: “/”
    - Resultados de la búsqueda: “/items?search=”
    - Detalle del producto: “/items/:id”

  - Construir los siguientes endpoints para ser utilizados desde las vistas: 

```
/api/items?q=​:query

```
    
Debe consultar el siguiente endpoint: https://api.mercadolibre.com/sites/MLA/search?q=:query

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
   
- https://api.mercadolibre.com/items/:id
- https://api.mercadolibre.com/items/:id/description
   
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

