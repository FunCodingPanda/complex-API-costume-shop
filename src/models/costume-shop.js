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
  const costumesArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'db.json'), 'utf-8'))
  const result = !limit ? costumesArray : costumesArray.slice(0, limit)
  return result
}


getById = (id) => {
  const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop,'db.json'), 'utf-8'))
  let response = costumeArray.find(costume => { return costume.id === id })

  if (response === undefined) {
    response = {
      status: 404,
      message: 'Id not found',
      errors: error
    }
  }
  return response
}


update = (body, id) => {
  const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'db.json'), 'utf-8'))
  const error = []
  const index = costumeArray.findIndex(costume => {return costume.id === id})
  let response

  if (index === -1) {
    error.push('Costume id is not found')
  }
  if (body.name === undefined || body.price === undefined || Number(body.price) < 0.01) {
    if (body.name === undefined) error.push("Name is required")
    if (body.price === undefined) error.push("Price is required")
    else if (Number(body.price) < 0.01) error.push("Can't not be less than 1 cent")

    response = {
      status: 400,
      message: 'Incorrect information',
      errors: error
    }
  } else  {
    const costume = {
      id,
      name: body.name,
      price: body.price,
      description: body.description ? body.description : "None",
      tag: []
     }

     response = costume
     costumeArray[index] = costume
     fs.writeFileSync(path.join(__dirname, costumeShop, 'db.json'), JSON.stringify(costumeArray))
   }
  return response
}


deleteById = (id) => {
  const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'db.json'), 'utf-8'))
  let response = costumeArray.find(costume => { return costume.id === id })
  const index = costumeArray.findIndex(costume => {return costume.id === id})

  if (index === -1) {
    response = {
      status: 404,
      message: `Not a costume id ${id}`,
      errors: 'Not found'
    }
  } else {
    costumeArray.splice(index, 1)
    response = true

     fs.writeFileSync(path.join(__dirname, costumeShop, 'db.json'), JSON.stringify(costumeArray))
  }
  return response
}

module.exports = { create, getAll, getById, update, deleteById }
