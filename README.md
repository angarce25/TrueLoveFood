# Blog Viajero

Este es un proyecto de blog viajero desarrollado en dos carpetas diferentes: una para el backend (node) y otra para el frontend, lo que permite una organización eficiente del código. El backend está construido utilizando MySQL, Express, Node.js y Sequelize, mientras que el frontend está desarrollado en React, haciendo uso de Bootstrap para el diseño y los modales, así como React Router DOM para la navegación entre páginas.
En resumen, el proyecto de Blog Viajero es una plataforma versátil que permite a los usuarios compartir sus experiencias de viaje de manera fácil y accesible, mientras ofrece una interfaz intuitiva y atractiva para navegar y gestionar las entradas del blog. 

## Características

- **Conexión con Base de Datos:** El backend está conectado a una base de datos MySQL, permitiendo el almacenamiento de las entradas del blog.
- **CRUD Completo:** Se implementa el método CRUD (Crear, Leer, Actualizar, Borrar) para las entradas del blog, lo que permite gestionar fácilmente el contenido.
- **Pruebas Locales:** Todas las pruebas se realizan localmente en el entorno de desarrollo, utilizando el localhost para acceder a la aplicación.
- **Despliegue Futuro:** En próximas versiones se tiene planeado implementar el despliegue del proyecto para hacerlo accesible en línea. Actualmente tenemos el diseño de la web en nuestro Figma https://www.figma.com/file/TbQuU9FbyBE1YYXu6NaciZ/TrueLoveFood?type=design&node-id=0%3A1&mode=dev&t=EVxVV4huVItAKl6M-1
- **Página de Usuario:** Se tiene previsto desarrollar una página de usuario donde los usuarios puedan iniciar sesión, gestionar su perfil y ver sus publicaciones.

## Tecnologías Utilizadas

### Backend

- **MySQL:** Sistema de gestión de base de datos relacional utilizado para almacenar las entradas del blog.Mysql2 es un controlador MySQL para Node.js. Se utiliza para conectarse a una base de datos MySQL desde una aplicación Node.js. Proporciona una implementación rápida y eficiente de la comunicación con la base de datos MySQL.
- **Express:** Framework de Node.js utilizado para construir la API RESTful.
- **Node.js:** Entorno de ejecución de JavaScript utilizado para construir el backend del proyecto.
- **Sequelize:** ORM (Object-Relational Mapping) de Node.js utilizado para interactuar con la base de datos MySQL de forma sencilla y eficiente.




### Frontend

- **React:** Biblioteca de JavaScript utilizada para construir la interfaz de usuario del frontend.
- **Bootstrap:** Framework de CSS utilizado para el diseño y la maquetación de la aplicación, proporcionando un aspecto visual atractivo y responsivo.
- **React Router DOM:** Librería de React utilizada para la navegación entre páginas de forma dinámica y sin recargar la página.

## Test con Cypress

<div align="center">
  <img src="https://github.com/angarce25/TrueLoveFood/assets/87614231/f104ba1c-5600-4636-ac08-37ca2093138e" alt="Test Image 1" width="400">
</div>

<div align="center">
  <img src="https://github.com/angarce25/TrueLoveFood/assets/87614231/57192377-d472-4091-a902-f9a8120917c0" alt="Test Image 2" width="400">
</div>

<div align="center">
  <img src="https://github.com/angarce25/TrueLoveFood/assets/87614231/6cdfa649-751e-4a1e-b235-c4aabacdff2a" alt="Test Image 3" width="400">
</div>



## Instalación y Uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del backend y del frontend en sus respectivas carpetas utilizando npm, es importante tener claro el puerto que vamos a utilizar:

```bash
# Instalación de dependencias del backend
cd node
npm install
npm install mysql2
npm install -g nodemon
npm install sequelize
npm install express



# Instalación de dependencias del frontend
cd frontreact
npm install
npm install bootstrap
npm install react-modal
npm install bootstrap

# Comando de ejecución para ver el proyecto en local
# cd node en backend
nodemon app

#cd frontreact en frontend
npm start

