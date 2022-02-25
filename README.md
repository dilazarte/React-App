# CbaSports - E-Commerce | ReactJS by David Lazarte.
**Bienvenidos, esta app fue desarrollada en React JS.**

![Demostration](https://media0.giphy.com/media/Q5ugtYDux3Lkr5JVKs/giphy.gif?cid=790b76118086bf0d768114550204a7d192c6699d59001449&rid=giphy.gif&ct=g)

Aqui pueden ver el [Video completo](https://www.loom.com/share/02730d8487994b7498cd1818a4b3182f)


### Dependencias:

```
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^8.8.0",
    "formik": "^2.2.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^5.2.0",
    "react-script": "^2.0.5",
    "react-scripts": "^5.0.0",
    "react-simple-star-rating": "^4.0.5",
    "react-spinners": "^0.11.0",
    "sweetalert2": "^11.4.0",
    "web-vitals": "^2.1.3"
```

## Utilizacion

**Primero clone el repositorio:**
```
git clone https://github.com/dilazarte/React-App.git
```

**Luego en la terminal ejecute:**
```bash
npm install
```

**Finalmente inicie la aplicacion:**
```
npm start
```

En el navegador escribir: [http://localhost:3000](http://localhost:3000) para poder ver el proyecto.


## Navegacion:

El proyecto cuenta con distintas secciones que muestran los productos dependiendo de la categoria seleccionada
que se maneja mediante el ruteo de las mismas con los filtros de la peticion a la database de firestore

## Detalle del producto

Se puede entrar al detalle del producto y ver informacion mas detallada y tambien se muestra una seccion donde se agrupan
distintos productos de igual categoria para tener un acceso mas rapido y cuenta con el boton de agregar al carrito con control de stock.
Si se elige un numero mayor al stock se mostrara un error por pantalla que desaparecera cuando se agregue una cantidad menor o igual al stock.

## Carrito de compras

Dentro del carrito de compras se puede manejar la cantidad de productos a comprar, cuenta con control de stock y tambien se puede eliminar un producto
especifico o limpiar todo el carrito de compras.

## Favoritos

Los articulos cuentan con una marca para poder guardarlos como favoritos, se puede acceder a la seccion y borrarlos, tambien se puede
mascar los productos desde la vista general y tambien desde el detalle.

## Checkout - Finalizar compra

En esta seccion se rellena el formulario con los datos del comprador, el formulario esta hecho con formik y cuenta con validacion que irá mostrando errores
en el formulario si no se cumple la condicion de validacion, tampoco se ejecutaba el submit del boton si no estan completos todos los campos.
Una vez que se haya completado y enviado el formulario, se hara una revision de stock en firestore y de contar con stock de los productos seleccionados, devolvera
un numero de ID correspondiente a la orden de compra, y se autoredireccionara a la pantalla principal, de lo contrado devolvera un error mostrando en pantalla los articulos
sin stock y se cancelara la orden.

-La seccion del checkout solo es accesible si el carrito de compras tiene uno o mas elementos, de esta vacio al querer navegar de forma manual se redireccionara a
la pantalla de inicio.-

