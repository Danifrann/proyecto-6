# API de gestión de productos y usuarios con Node.js y MongoDB

## Descripción

Este proyecto es una API para gestionar productos y usuarios. Los usuarios pueden autenticarse y realizar operaciones CRUD sobre productos. Los productos creados por un usuario están ligados a ese usuario y solo el creador puede modificarlos o eliminarlos.

### Requisitos

- Node.js
- MongoDB
- npm (Node Package Manager)

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
