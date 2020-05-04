'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// this is the button that shows the whole section for viewing interests
const onViewCats = event => {
  $('.interests').show()
  $('.gallery').hide()
  $('.Auth').hide()
  ui.createForm()
}

// this is the button that shows the interests
const onViewAllCats = event => {
  event.preventDefault()
  $('.viewAllInterests').show()
  api.indexView()
    .then(ui.viewCatsSuccess)
    .catch(ui.viewCatsFailure)
}

const onCreateCats = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('test', data)
  api.createCats(data)
    .then(ui.createCatsSuccess)
    .catch(ui.createCatsFailure)
}

const onUpdateForm = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.updateForm(id)
}

const onUpdateCategory = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  console.log('onUpdateCategory data is ', data)
  api.updateCat(id, data)
    .then(ui.updateCatSuccess)
    .catch(ui.updateCatFailure)
}

const onDeleteCategory = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteCat(id)
    .then(() => {
      ui.deleteCatSuccess(id)
    })
    .catch(ui.deleteCatFailure)
}

// export handlers
module.exports = {
  onViewCats,
  onViewAllCats,
  onCreateCats,
  onUpdateForm,
  onUpdateCategory,
  onDeleteCategory
}
