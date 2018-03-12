const model = require('../models/costume-shop')

create = (req, res, next) => {
  const costume = model.create(req.body)

  if (costume.errors) {
    return next({
      status: costume.status,
      message: costume.message,
      errors: costume.errors
    })
  }
  res.status(201).json({ costume })
}


getAll = (req, res, next) => {
  const costumes = model.getAll(req.query.limit)

  if (costumes.errors) {
    return next({
      status: costumes.status,
      message: costumes.message,
      errors: costumes.errors
    })
  }
  res.status(200).json({ costumes })
}


getById = (req, res, next) => {
  const costume = model.getById(req.params.id)

  if (costume.errors) {
    return next({
      status: costume.status,
      messages: costume.messages,
      errors: costume.errors
    })
  }
  res.status(200).json({ costume })
}


update = (req, res, next) => {
  const costume = model.update(req.body)

  if (costume.errors) {
    return next({
      status: costume.status,
      messages: costume.messages,
      errors: costume.errors
    })
  }
  res.status(200).join({ costume })
}


deleteById = (req, res, next) => {

}


module.exports = { create, getAll , getById, update, deleteById }
