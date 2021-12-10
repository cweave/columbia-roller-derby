const RookiesModel = require("../model/repository.model")

exports.insert = (req, res) => {
  RookiesModel.create(req.body).then((result) => {
    res.status(201).send({ id: result._id })
  })
}

exports.findById = (req, res) => {
  RookiesModel.findById(req.params.id).then((result) => {
    res.status(200).send(result)
  })
}

exports.list = (req, res) => {
  RookiesModel.list().then((result) => {
    res.status(200).send(result)
  })
}

exports.patchById = (req, res) => {
  RookiesModel.patchById(req.params.id, req.body).then(() => {
    res.status(204).send({})
  })
}

exports.deleteById = (req, res) => {
  RookiesModel.deleteById(req.params.id, req.body).then(() => {
    res.status(204).send({})
  })
}
