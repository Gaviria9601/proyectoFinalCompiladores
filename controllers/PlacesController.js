let Place = require('../models/Place')

let PlaceController = {
    // Listar todos los lugares
    show(req, res) {
        Place.find({})
            .then(docs => {
                res.json(docs)
            }).catch(err => {
                res.json(err)
            })
    },
    // Buscar un lugar por id
    find(req, res) {
        Place.findById({
            _id: req.params.id
        })
            .then(doc => {
                res.json(doc)
            }).catch(err => {
                res.json(err)
            })
    },
    // Actualizar un lugar
    udpate(req, res) {
        Place.update({
            _id: req.params.id
        }, {
                name: req.body.name,
                description: req.body.description
            })
            .then(doc => {
                res.json(doc)
            }).catch(err => {
                res.json(err)
            })
    },
    // Eliminar un lugar
    destroy(req, res) {
        Place.findByIdAndDelete({
            _id: req.params.id
        })
            .then(doc => {
                res.json(doc)
            }).catch(err => {
                res.json(err)
            })
    },
    // Crear el lugar
    store(req, res) {
        Place.create({
            name: req.body.name,
            description: req.body.description
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = PlaceController;