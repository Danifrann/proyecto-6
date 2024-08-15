# API de gestión de productos y usuarios con Node.js y MongoDB

## Descripción

Este proyecto es una API para gestionar productos y usuarios. Los usuarios pueden autenticarse y realizar operaciones CRUD sobre productos. Los productos creados por un usuario están ligados a ese usuario y solo el creador puede modificarlos o eliminarlos.

### Requisitos

- Node.js
- MongoDB
- npm (Node Package Manager)


## Uso

### Usuarios

api/user/register
api/user/login
api/user/verifytoken, requiere autenticación para obtener el usuario
api/user/update, requiere autenticación para actualizar el usuario

### Productos

api/product/create, requiere autenticación para crear un producto
api/product/readall, no requiere autenticación para obtener todos los productos
api/product/readone, no requiere autenticación para obtener un producto por ID
api/product/update, requiere autenticación para actualizar un producto por ID solo si es el creador del producto
api/product/delete, requiere autenticación para eliminar un producto por ID solo si es el creador del producto


