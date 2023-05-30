const bcrypt = require('bcryptjs')

class UserController {
    ejemploSession (req, res) {
        const user = {
            nombre: "juan",
            edad: 22
        }
        req.session.user = user;
        res.cookie('myFirstCookie', user.nombre, {maxAge: 60000})
        res.json(req.session)
    }

    probarSession(req, res) {
        res.json({
            session: req.session,
            cookie: req.cookies.myFirstCookie})
    }

    borrarSession(req, res) {
        req.session.destroy();
        res.json({msg: 'session cerrada'})
    }

    probarHash(req, res) {
        let contraseña = "123456789";
        let salto = bcrypt.genSaltSync();
        let hash = bcrypt.hashSync(contraseña, salto);
        let comparison1 = bcrypt.compareSync(contraseña, hash);
        let comparison2 = bcrypt.compareSync("hello", hash)
        res.json({ hash, comparison1, comparison2 })
    }
}

module.exports = new UserController