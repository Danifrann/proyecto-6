const jwt = require('jsonwebtoken');

// Verificar el token de usuario
module.exports = (req, res, next) => {
    let {authorization} = req.headers;
    if(!authorization) {
        return res.status(401).send('No autorizado');
    }
    try {
      let [type, token] = authorization.split(' ');
      if(type !== 'Bearer') {
        return res.status(401).send('No autorizado');
      }

      const openToken = jwt.verify(token, process.env.SECRET);
      req.user = openToken.user;
      next();

    } catch (error) {
        return res.status(401).send('No autorizado');
    }
}