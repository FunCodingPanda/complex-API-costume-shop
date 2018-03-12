const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')
const costumeShop = '../../costumes-shop/'

create = (body) => {
  const error = []
  let response

  if (body.name === undefined || body.price === undefined || Number(body.price) < 0.01) {
    if (body.name === undefined)  error.push('Name id required')
    if (body.price === undefined) error.push('Price is required')
    else if (Number(body.price) < 0.01) error.push("Can't not be less than 1 cent")

      response = {
        status: 400,
        message: 'Incorrect information',
        errors: error
      }
    } else {
      const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'db.json'), 'utf-8'))

      const costume =  {
        id: uuid(),
        name: body.name,
        price: Number(body.price),
        description: body.description ? body.description : "None",
        tag: []
      }

      response = costume

      costumeArray.push(costume)
      fs.writeFileSync(path.join(__dirname, costumeShop, 'db.json'), JSON.stringify(costumeArray))
  }
  return response
}


getAll = (limit) => {
  const costumesArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'db.json')))
  const result = !limit ? costumesArray : costumesArray.slice(0, limit)
  return result
}


getById = (id) => {
  const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop,'db.json')))
  let response = costumeArray.find(costume => { return costume.id === id })

  if (response === undefined) {
    response = {
      status: 404,
      message: 'Id is not found',
      errors: error
    }
  }
  return response
}


update = (body, id) => {
  costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'db.json')))

}


deleteById = (id) => {

}

module.exports = { create, getAll, getById, update, deleteById }
