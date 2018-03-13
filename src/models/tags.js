const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')
const costumeShop = '../../costumes-shop/'



create = (id, body) => {
    const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'db.json'), 'utf-8'))
    const error = []
    let costume = costumeArray.find(costume => { return costume.id === id})
    const regex =  RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')
    let response

    if (!costume) {
      return {
        status: 404,
        message: "Id not found",
        errors: 'Not found'
      }
    }
    else if (body.name === undefined) error.push('Name is required')
    else if (body.name.length > 10) error.push("Name can't not be longer than 10 char")
    if (body.color && !regex.test(body.color)) error.push('Color must be in hex value')

    if (error.length > 0) {
    return {
      status: 400,
      message: "Id not found",
      errors: error
    }
  } else {
    const tag = {
      id: uuid(),
      name: body.name,
      color: body.color
    }
    const index = costumeArray.indexOf(costume)
    costumeArray[index].tags.push(tag)

    fs.writeFileSync(path.join(__dirname, costumeShop, 'db.json'), JSON.stringify(costumeArray))

    response = tag

  }
  return response
}


getById = (id) => {
  const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop,'db.json'), 'utf-8'))
   let index = costumeArray.findIndex(costume => { return costume.id === id})

   if (index === -1) {
     return {
       status: 404,
       message: "Id not found",
       errors: 'Not found'
     }
   } else {
    return costumeArray[index].tags
  }
}


update = (id, body) => {
  const costumeArray = JSON.parse(fs.readFileSync(path.join (__dirname, costumeShop, 'db.json', 'utf-8')))
  const error = []
  const index = costumeArray.findIndex(costume => {return costume.id === id})
  
  let response
  if (index === -1)
}


deleteById = (id) => {

}



module.exports = { create, getById, update, deleteById }
