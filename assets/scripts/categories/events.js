'use strict'
// const api = require('./api')
// const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')

const onViewCats = function () {
  $('.interests').show()
  $('.gallery').hide()
  $('.Auth').hide()
}

// export handlers
module.exports = {
  onViewCats
}
