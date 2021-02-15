const store = require('./../store')

const signUpSuccess = function (response) {
  $('#sign-up-fail').text('SUCCESS!')
  // $('#sign-in-view').show()
  // $('#sign-up-view').hide()
}

const signUpFailure = function (response) {
  $('#sign-up-fail').text('Hmm.. something went wrong. Please, try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-fail').text('SUCCESS!')
  // $('#welcome-user-view').show()
  // $('#sign-in-view').hide()
  $('#sign-in').trigger('reset')
}

const signInFailure = function (response) {
  $('#sign-in-fail').text('Hmm.. something went wrong. Please, try again.')
}

const changePasswordSuccess = function (response) {
  $('#change-password-fail').text('SUCCESS!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#change-password-fail').text('Hmm.. something went wrong. Please, try again.')
}

const signOutSuccess = function () {
  $('#sign-out-fail').text('SUCCESS!')
  // $('#welcome-view').show()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('#sign-out-fail').text('Hmm.. something went wrong. Please, try again.')
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
