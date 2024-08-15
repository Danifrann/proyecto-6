# API de gestión de productos y usuarios con Node.js y MongoDB

## Descripción

Este proyecto es una API para gestionar productos y usuarios. Los usuarios pueden autenticarse y realizar operaciones CRUD sobre productos. Los productos creados por un usuario están ligados a ese usuario y solo el creador puede modificarlos o eliminarlos.

### Requisitos

- Node.js
- MongoDB
- npm (Node Package Manager)

## Modelos

### User

El modelo `User` define a los usuarios de la aplicación y contiene las siguientes propiedades:

- `username` (String, requerido): Nombre de usuario.
- `email` (String): Correo electrónico del usuario.
- `password` (String, requerido): Contraseña del usuario.

### Product

El modelo `Product` define los productos que pueden ser creados por los usuarios y contiene las siguientes propiedades:

- `name` (String, requerido): Nombre del producto.
- `price` (Number, requerido): Precio del producto.
- `description` (String): Descripción del producto.
- `stock` (Number, por defecto 0): Cantidad en stock del producto.
- `user` (ObjectId, referencia a `User`, requerido): Referencia al usuario que creó el producto.

## Uso

### Usuarios

- `api/user/register`: Registro de un nuevo usuario.
- `api/user/login`: Inicio de sesión de un usuario.
- `api/user/verifytoken`: Requiere autenticación para obtener la información del usuario.
- `api/user/update`: Requiere autenticación para actualizar la información del usuario.

### Productos

- `api/product/create`: Requiere autenticación para crear un producto.
- `api/product/readall`: No requiere autenticación para obtener todos los productos.
- `api/product/readone`: No requiere autenticación para obtener un producto por ID.
- `api/product/update`: Requiere autenticación para actualizar un producto por ID solo si es el creador del producto.
- `api/product/delete`: Requiere autenticación para eliminar un producto por ID solo si es el creador del producto.
