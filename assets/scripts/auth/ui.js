const store = require('./../store')

const signUpSuccess = function (response) {
  $('#sign-up-alert').text('SUCCESS!')
  // $('#sign-in-view').show()
  // $('#sign-up-view').hide()
}

const signUpFailure = function (response) {
  $('#sign-up-alert').text('Hmm.. something went wrong. Please, try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-alert').text('SUCCESS!')
  // $('#welcome-user-view').show()
  // $('#sign-in-view').hide()
  $('#sign-in').trigger('reset')
}

const signInFailure = function (response) {
  $('#sign-in-alert').text('Hmm.. something went wrong. Please, try again.')
}

const changePasswordSuccess = function (response) {
  $('#change-password-alert').text('SUCCESS!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#change-password-alert').text('Hmm.. something went wrong. Please, try again.')
}

const signOutSuccess = function () {
  $('#sign-out-alert').text('SUCCESS!')
  // $('#welcome-view').show()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('#sign-out-alert').text('Hmm.. something went wrong. Please, try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
