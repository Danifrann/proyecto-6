const User = require('../models/User');
const bcryptjs = require('bcryptjs');


// Registrar un nuevo usuario
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        const user = new User({
            username,
            email,
            password: hash
        });

        user.save();
        return res.json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Iniciar sesión de usuario
exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Contraseña incorrecta');
        }

        const payload = { user: { id: user._id } };
        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600000
        });
        return res.json({token});
    } catch (error) {
        res.status(500).send(error);
    }   
    
};

// Verificar el token de usuario
exports.verifyToken = async (req, res) => {
    try {
        const usuario = await User.findById(req.user.id);
        res.json(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
    const {email, username} = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.user.id, { username: username, email: email }, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

