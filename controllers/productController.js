const Product = require('../models/Product');

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock,
            user: req.user.id 
        }
        console.log(data);
        const newProduct = new Product(data);
        console.log(newProduct);

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
};

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Actualizar un producto por ID
exports.updateProduct = async (req, res) => {
    const data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock
    }

    console.log(data);
    try {
        const product = await Product.findByIdAndUpdate({
            _id: req.params.id,
            user: req.user.id
        }, data, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Eliminar un producto por ID
exports.deleteProduct = async (req, res) => {
    console.log(req.params.id);
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id, user: req.user.id});
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};
