const model = require('../models/tags')


create = (req, res, next) => {
  const tag = model.create(req.params.id, req.body)

  if (tag.errors) {
    return next({
      status: tag.status,
      message: tag.message,
      errors: tag.errors
    })
  }
  res.status(200).json({ tag })
}


getById = (req, res, next) => {
  const tag = model.getById(req.params.id)

  if (tag.errors) {
    return next({
      status: tag.status,
      message: tag.message,
      errors: tag.errors
    })
  }
  res.status(200).json({ tag })
}


update = (req, res, next) => {
  const tag = model.update(req.params.id, req.body)

  if (tag.errors) {
    return next({
      status: tag.status,
      message: tag.message,
      errors: tag.errors
    })
  }
  res.status(200).json({ tag })
}


deleteById = (req, res, next) => {
  const tag = model.deleteById(req.params.id)

  if (tag.errors) {
    return next({
      status: tag.status,
      message: tag.message,
      errors: tag.errors
    })
  }
  res.status(200).json({ tag })
}


module.exports = { create, getById, update, deleteById }
