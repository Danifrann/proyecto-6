const express = require('express');
const connectDB = require('./db');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/Users');
const app = express();
const cors = require('cors');

require('dotenv').config();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Rutas
app.use('/api/product', productRoutes); 
app.use('/api/user', userRoutes); 


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// YyHhHPh1lVwtfuWp  - danifran
