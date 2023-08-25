# To do list Test

> Prueba técnica para postular a LicitaLab

## Índice

* [1. Empezando a utilizar la app](#1-empezando-a-utilizar-la-app)
* [2. Instrucciones solicitadas](#2-instrucciones-solicitadas)
* [3. Uso](#3-uso)
* [4. Requerimientos](#4-requerimientos)
* [5. Herramientas y librerias utilizadas](#5-herramientas-y-librerias-utilizadas)
* [6. Autor](#6-autor)

***

## 1. Empezando a utilizar la app

Antes de comenzar, asegurate de tener instalado node y tu gestor de paquete de preferencia (npm || yarn) en tu computador.
(Asegurate de tener una version de node == v18.17.1 (npm v9.6.7) o >)

Para empezar a utilizar la App puedes hacer Fork o clonar este repositorio y luego:

```
yarn  || npm install  - Para instalar todas las dependencias del proyecto.
yarn || npm run dev - Para correr la App.
yarn || npm run json-server - Para correr el Json-server.
```

```
http://localhost:3000/ - Acá puedes ver la App lista para probar.
http://localhost:3001/ - Acá se encuentra el servidor.
```

## 2. Instrucciones solicitadas

Para la creación de esta interfaz se tuvo en cuenta el siguiente documento que contiene las indicaciones que debería cumplir esta aplicación:
[Prueba técnica Licitabal](https://docs.google.com/document/d/1gCxteC8MJAYAllIwuoyj63R4DgQhJm9-ziTdTZAwE4w/edit#heading=h.cw1kvgd27tpl)

## 3. Uso
[Demo](https://drive.google.com/file/d/1h78SjskeQI2YizQzLa9nTxFSbSZFjQY6/view?usp=sharing)
<img src="https://drive.google.com/drive/u/0/folders/1ex1awHEr-JYGIlHoStJMmMIy11z8M_BV" alt="todoUI" width="300px">


1. Al acceder a la app te daras cuenta que ya cuenta con cierta data que te permitirá observar mejor la ui ya que cuenta con diferentes tarjetas en sus distintos estados.

2. Para poder observar el correcto funcionamiento de la aplicación te recomiendo lo siguiente (ten en cuenta que siempre puedes probar flujos extras además de los mencionados acá):

    * Debido a que la app ya cuenta con cierta información sería bueno poder probar primero ciertas cosas como algunos ordenamientos y filtros. Te recomiendo usar el search escribiendo alguna palabra (o parte de ella) que veas en la lista o que no veas también. Así mismo puede explorar el botón o dropdown **ordenar** para ver como funciona cada uno de los orden en la lista.
    * Una vez probado esto puedes eliminar algunas tarjetas para que así tengas una plataforma más limpia y puedas observar con mayor detalle y menos distracción el funcionamiento. Para esto ve a la tarjeta de tu preferencia posicionate encima de ella y haz click derecho, debería aparecer la opción de eliminar. Puedes eliminar todas (ten en cuenta que de momento solo puedes eliminar una a la vez) o las que creas que pueden distraerte más, de nuevo, sientase comodo de explorar.
    * Ahora intenta crear una nueva card (si por alguna razón no encontraras como hacerlo un dato útil sería que puedes pararte arriba de algunos botones y ver su descripción, quizá eso pueda ayudarte en el proceso)
    * El llenado de la tarjeta o to do es bastante sencillo, simplemente puedes comenzar escribiendo algo desees o necesites hacer y agregar una fecha de vencimiento o deadline.
    * Puedes crear tantas tarjetas como desees o necesites, así mismo puedes editar su contenido (descripcion y fecha limite) así como marcarla o desmarcarla como lista o completada.

## 4. Requerimientos

Para el desarrollo de este MVP me planifique en base a la implementación de lo siguiente:

Realizado:

* [x] Aplicación construida con **React**
* [x] Arquitectura que utilice **Redux** (en mi caso **Redux Toolkit** para una implementación mucho más sencilla)
* [x] Se utilizo **Redux thunk** para hacer las solicitudes de la API de forma asincrona
* [X] Se utilizo **Typescript** para el desarrollo de la aplicación
* [x] Utilizar herramienta de control de versiones (en mi caso **Github**)
* [x] Creación de una UI en base al prototipo recibido
* [x] Definir un orden para mostrar las tarjetas o to dos
* [x] Calcular el estado respecto a la fecha actual versus la fecha de vencimiento de la tarea.
* [x] Filtrar las tarjetas o to dos por texto
* [x] Se utilizo un sistema de colores e iconos para que las tarjetas mostraran facilmente su estado
* [x] Se permite ordenar la data por:
  * [x] Según la fecha de creación de la tarjeta o to do (de mayor a menor)
  * [x] Segíún fecha de vencimiento de la tarjeta o to do (de menor a mayor)
  * [x] Según el estado de la tarjeta o to do (siendo más importante "atrasada", y el menos importante "liberada")
* [x] Principales componentes con sus respectivos estilos
  * [x] Componente **Card** para mostrar el to do
  * [x] Componente **Status** para el icono respectivo de cada estado
  * [x] Componente **DatePicker** para manejar la fecha de vencimiento de la tarjeta
  * [x] Componente **AddCard** para mostrar el botón de agregar una nueva card
  * [x] Componente **DropdownMenu** y **DropdownMenuItem** para lograr que el botón de ordenar tenga diferentes opciones.
  * [x] Componente **button** para renderizar siempre los mismos estilos de botones
  * [x] Componente **contexMenu** para gatillar un menú al hacer click derecho sobre una tarjeta o to do
  * [x] Componente **Search** para mostrar un input tipo search que permita filtrar por la descripción de la tarjeta o to do
  * [x] Componente **Tooltip** para mostrar mayor información acerca de ciertos botones o iconos.

No realizado:

* [] Filtrar las tarjetas o to dos por rango de tiempo
* [] Filtrar las tarjetas o to dos por estado (liberada, atrasada o pendiente)

## 5. Herramientas y librerias utilizadas 🛠️

En éste proyecto fueron utilizadas varias herramientas y librerias para llegar al resultado del producto entregado.
Las herramientas usadas fueron:

* [Redux Toolkit.](https://redux-toolkit.js.org) – Para el manejo del estado de la aplication y la creación de thunks para las solicitudes HTTP.
* [Tailwind](https://tailwindcss.com) – Para los estilos de la aplicación.
* [Git y GitHub](https://github.com/xsamynox/to-do-list-test) – Para guardar las versiones de trabajo.
* [Json-server](https://github.com/typicode/json-server) – Para simular una API real sin la necesidad de configurar un servidor completo con una base de datos.
* [Axios](https://axios-http.com) – Para poder realizar las solicitudes HTTP a la API
* [Iconify](https://icon-sets.iconify.design/) – Para los iconos de la app

## 6. Autor ✒️

* **Samantha Moreno** [GitHub](https://github.com/xsamynox) :octocat: - Front-end Developer
