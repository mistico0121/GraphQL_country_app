This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Descripción

El proyecto puede ser ejecutado en localhost por medio del siguiente comando:

#### `yarn start`

El cual corre la app en development mode.
[http://localhost:3000](http://localhost:3000) para abrir en el navegador.
acuerdo a los lenguajes hablados en éstos

La aplicación consiste, basicamente, en conectarse a un servidor GraphQL con información de países, de manera de poder hacer queries y búsquedas según el nombre de los países, separando los países encontrados de acuerdo al continente en el que se encuentran, y de acuerdo a los lenguajes hablados en estos.
Ésta posee una barra de navegacion, de manera que se filtran los países de acuerdo a las primeras letras con las que inicia el nombre de cada país.

Para lograr la comunicación con el servidor GraphQL, se utilizó la librería Apollo, la cual nos permite conectarnos y hacer queries. Se realiza una sola query al momento de cargar la aplicación, en la que se solicita toda la info que se utilizará.


## Ejecución

Durante la ejecución del programa, se hace una query una sola vez al grafo. Luego, se utilizan localmente los datos obtenidos para así poder filtrar la lista por medio de funciones de javascript y los componentes de React que componen la aplicación. Esto fue pensado para minimizar la cantidad de llamadas que se hacen al grafo, y que se pueda trabajar lo más posible del lado del cliente.

Cuando la barra de búsqueda está vacía, no aparece ningún país. Sin embargo, al ingresar texto y presionar Enter, comienza a filtrar de acuerdo a los nombres de los países.

Al presionar los botónes que controlan el filtrado, se puede cambiar el criterio de agrupacíon de los países mostrados.

![image1](../imgs/app0.png)
![image2](../imgs/app1.png)
![image3](../imgs/app2.png)


## Observaciones.

Dado lo pedido, la aplicación cumple con todos los requerimientos funcionales. 

Lo único que me incomodó de mi código fué cómo, cuando se hace una búsqueda y se agrupan los países por lenguaje, existe un pequeño "delay" debido a unas nested queries. Al final del día, priorizé funcionalidad por sobre eficiencia, es decir, que hiciera todo lo que se me pidió, en vez de que fuera lo más rapido posible. Si tuviera que seguir trabajando en este código, lo más importante que solucionaría sería esto.

