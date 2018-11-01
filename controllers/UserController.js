let User = require('../models/User')

let UserController = {
    // Listar todos los usuarios
    show(req, res) {
        User.find({})
            .then(docs => {
                res.json(docs)
            }).catch(err => {
                res.json(err)
            })
    },
    // Buscar un usuario por id
    find(req, res) {
        User.findById({
            _id: req.params.id
        })
            .then(doc => {
                res.json(doc)
            }).catch(err => {
                res.json(err)
            })
    },
    // Crear el Usuario
    store(req, res) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }).then(doc => {
            res.status(201).json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = UserController;