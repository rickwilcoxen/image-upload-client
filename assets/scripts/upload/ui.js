'use strict'

const store = require('../store')
const indexImageTemplate = require('../templates/image-listing.handlebars')
const imageTemplate = require('../templates/image.handlebars')
const uploadImageTemplate = require('../templates/upload-image.handlebars')
const updateFormTemplate = require('../templates/update-form.handlebars')

const createForm = function () {
  $('.gallery').html(uploadImageTemplate).show()
}
const updateForm = function (id) {
  const upload = store.uploads.find(x => x._id === id)

  const updateFormHtml = updateFormTemplate({ upload })
  $(`#${id}`).html(updateFormHtml)
}

const indexUploadSuccess = (data) => {
  // update data.uploads to add isOwner property
  data.uploads.forEach(upload => { upload.isOwner = store.user._id === upload.owner })
  // pass the template multiple uploads and current user
  const indexImageHtml = indexImageTemplate({ uploads: data.uploads })
  store.uploads = data.uploads
  $('.gallery').html(indexImageHtml).show()
  $('.Auth').hide()
  $('#Messages').text('Index Succesfully').removeClass('failure').addClass('success')
}

const indexUploadFailure = function () {
  $('#Messages').text('Error Indexing').removeClass('success').addClass('failure')
}

const createUploadSuccess = function (data) {
  $('#Messages').text('Upload Succesful').removeClass('failure').addClass('success')
}

const createUploadFailure = function () {
  $('#Messages').text('Upload Error').removeClass('success').addClass('failure')
}

const updateUploadSuccess = function (data) {
  $('#Messages').text('Update Successfully').removeClass('failure').addClass('success')
  const imageHtml = imageTemplate({ upload: data.upload })
  $(`#${data.upload._id}`).html(imageHtml)

  const index = store.uploads.findIndex(x => x._id === data.upload._id)
  store.uploads[index] = data.upload
}

const updateUploadFailure = function () {
  $('#Messages').text('Error Updating').removeClass('success').addClass('failure')
}

const deleteUploadSuccess = function (id) {
  $('#Messages').text('Delete Successful').removeClass('failure').addClass('success')
  $(`#${id}`).remove()
}

const deleteUploadFailure = function () {
  $('#Messages').text('Error Deleting').removeClass('success').addClass('failure')
}

module.exports = {
  indexUploadSuccess,
  indexUploadFailure,
  createUploadSuccess,
  createUploadFailure,
  updateUploadSuccess,
  updateUploadFailure,
  deleteUploadSuccess,
  deleteUploadFailure,
  createForm,
  updateForm
}
