'use strict'

const store = require('../store')
const categoryFormTemplate = require('../templates/categories.handlebars')
// const categoryFormCreate = require('../templates/createCats.handlebars')
const categoryFormUpdate = require('../templates/categories-update.handlebars')
const formUpdate = require('../templates/update-form-categories.handlebars')

const createForm = () => {
  // shows handlebars for creating the interest
  // $('.interests').html(categoryFormCreate).show()
  // shows handlebars for showing all the interests
  $('.viewAllInterests').html(categoryFormTemplate).show()
}

const updateForm = function (id) {
  const category = store.categories.find(x => x._id === id)

  const updateFormHtml = formUpdate({ category })
  $(`#${id}`).html(updateFormHtml)
}

const viewCatsSuccess = (data) => {
  // update data.uploads to add isOwner property
  data.categories.forEach(category => { category.isOwner = store.user._id === category.owner })
  // pass the template multiple uploads and current user
  const indexCatsHtml = categoryFormTemplate({ categories: data.categories })
  store.categories = data.categories
  // console.log('data.categories is ', data.categories)
  $('.viewAllInterests').html(indexCatsHtml).show()
  $('.Auth').hide()
  $('.interests').show()
  $('#Messages').text('Index Succesfully').removeClass('failure').addClass('success')
}

const viewCatsFailure = () => {
  $('#Messages').text('Error Indexing').removeClass('success').addClass('failure')
}

const createCatsSuccess = (data) => {
  $('#Messages').text('Successfully created interest').removeClass('failure').addClass('success')
  console.log('createCatsSuccess', data)
}

const createCatsFailure = (data) => {
  $('#Messages').text('Upload Error').removeClass('success').addClass('failure')
}

const updateCatSuccess = function (data) {
  $('#Messages').text('Update Successfully').removeClass('failure').addClass('success')
  const catHtml = categoryFormTemplate({ categories: data.categories })
  $(`#${data.category._id}`).html(catHtml)
  const index = store.categories.findIndex(data.categories._id)
  console.log(data.categories._id)
  // console.log('updateCatSuccess data is ', data)
  store.categories[index] = data.category
  // console.log('updateCatSuccess data is ', data)
}

const updateCatFailure = function () {
  $('#Messages').text('Error Updating').removeClass('success').addClass('failure')
}

const deleteCatSuccess = function (id) {
  $('#Messages').text('Delete Successful').removeClass('failure').addClass('success')
  $(`#${id}`).remove()
}

const deleteCatFailure = function () {
  $('#Messages').text('Error Deleting').removeClass('success').addClass('failure')
}
module.exports = {
  store,
  categoryFormTemplate,
  viewCatsSuccess,
  viewCatsFailure,
  createCatsSuccess,
  createCatsFailure,
  createForm,
  updateForm,
  updateCatSuccess,
  updateCatFailure,
  deleteCatSuccess,
  deleteCatFailure
}
