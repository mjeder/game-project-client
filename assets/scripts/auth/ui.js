const store = require('./../store')

const signUpSuccess = function (response) {
  $('#alert-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (response) {
  $('#alert-message').text('Something went wrong... please try again!')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#alert-message').text('Thank you for signing in')
  $('#sign-in').trigger('reset')
}

const signInFailure = function (response) {
  $('#alert-message').text('Something went wrong... please try again!')
}

const changePasswordSuccess = function (response) {
  $('#alert-message').text('Password successfully changed!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#alert-message').text('Something went wrong... please try again!')
}

const signOutSuccess = function () {
  $('#alert-message').text('Signed out successfully!')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('#alert-message').text('Failed to sign out... please try again!')
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
