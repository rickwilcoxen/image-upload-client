'use strict'

const authEvents = require('./auth/events.js')
const navEvents = require('./nav/events.js')
const uploadEvents = require('./upload/events.js')
const catEvents = require('./categories/events.js')

$(() => {
  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  authEvents.addHandlers()

  // Navigation interactions
  $('#navsign-in').on('click', navEvents.onSignIn)
  $('#navsign-up').on('click', navEvents.onSignUp)
  $('#navViewCats').on('click', catEvents.onViewCats)
  $('#navUpload').on('click', uploadEvents.onUpload)
  $('#navViewAll').on('click', uploadEvents.onViewAll)
  $('#navFileUpdate').on('click', uploadEvents.onUpdate)

  // Resources interactions
  $('.gallery').on('submit', '#upload-btn', uploadEvents.onCreateUpload)
  $('.gallery').on('click', '.update-btn', uploadEvents.onUpdateForm)
  $('.gallery').on('submit', '.update-form', uploadEvents.onUpdateUpload)
  $('.gallery').on('click', '.delete-btn', uploadEvents.onDeleteUpload)

  // view categories resource interactions
  $('#SeeAllInterests').on('click', catEvents.onViewAllCats)
  $('#newInterestBtn').on('submit', catEvents.onCreateCats)

  // u-d resource interactions
  $('.viewAllInterests').on('click', '.update-btn', catEvents.onUpdateForm)
  $('.viewAllInterests').on('submit', '.update-form', catEvents.onUpdateCategory)
  $('.viewAllInterests').on('click', '.delete-btn', catEvents.onDeleteCategory)
})
