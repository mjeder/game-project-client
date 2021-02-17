const store = require('./../store')

const signUpSuccess = function (response) {
  $('#sign-up-alert').text('Account created! Please sign in below!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (response) {
  $('#sign-up-alert').text('Hmm.. something went wrong. Please, try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#user-welcome-view').show()
  $('#user-forms-view').hide()
  $('#sign-in').trigger('reset')
}

const signInFailure = function (response) {
  $('#sign-in-alert').text('Hmm.. something went wrong. Please, try again.')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#change-password-alert').text('Password successfully changed!')
  $('#change-password-view').hide()
}

const changePasswordFailure = function (response) {
  $('#change-password-alert').text('Hmm.. something went wrong. Please, try again.')
}

const signOutSuccess = function () {
  $('#sign-out-alert').text('Successfully signed out!')
  $('#game-over-view').hide()
  $('#user-welcome-view').hide()
  $('#play-game-view').hide()
  $('#user-forms-view').show()
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
