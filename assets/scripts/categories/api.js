'use strict'

const config = require('../config')
const store = require('../store')

const indexView = () => {
  return $.ajax({
    url: config.apiUrl + '/categories',
    method: 'GET',
    headers: {
      Authorization: `Bearer ` + store.user.token
    }
  })
}

const createCats = data => {
  return $.ajax({
    url: config.apiUrl + '/categories/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ` + store.user.token
    },
    data: data
  })
}

const updateCat = (id, data) => {
  return $.ajax({
    url: config.apiUrl + '/categories/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ` + store.user.token
    },
    data: data,
    contentType: false,
    processData: false
  })
}

const deleteCat = id => {
  return $.ajax({
    url: config.apiUrl + '/categories/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ` + store.user.token
    }
  })
}

module.exports = {
  indexView,
  createCats,
  updateCat,
  deleteCat
}
