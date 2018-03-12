const model = require('../models/costume-shop')

create = (req, res, next) => {

}
getAll = (req, res, next) => {

}
getById = (req, res, next) => {

}
update = (req, res, next) => {

}
deleteById = (req, res, next) => {

}
// function getAll (req, res, next) {
//   const limit = req.query.limit
//   const data = model.getAll(limit)
//   res.status(200).json({ data })
// }




// function create (req, res, next) {
//   const result = model.create(req.body)
//
//   if (result.errors) {
//     return next({ status: 400, message: `Could not create new costume`, errors: result.errors })
//   }
//
//   res.status(201).json({ data: result })
// }

module.exports = { create, getAll, getById, update, deleteById  }
