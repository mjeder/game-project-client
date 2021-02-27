const store = require('./../store')

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#sign-up-alert').text('Account created! Please sign in below!')
  setTimeout(() => {
    $('#sign-up-alert').text('')
  }, 4000)
}

const signUpFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-up-alert').text('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#sign-up-alert').text('')
  }, 3000)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('form').trigger('reset')
  $('#user-welcome-view').show()
  $('#user-forms-view').hide()
}

const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-in-alert').text('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#sign-in-alert').text('')
  }, 3000)
}

const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#change-password-view').hide()
  $('#change-password-alert').text('Password successfully changed!')
  setTimeout(() => {
    $('#change-password-alert').text('')
  }, 2000)
}

const changePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#change-password-alert').text('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#change-password-alert').text('')
  }, 2000)
}

const signOutSuccess = function (response) {
  store.over = true
  $('form').trigger('reset')
  $('#play-game-view').hide()
  $('#game-over-view').hide()
  $('#user-welcome-view').hide()
  $('#change-password-view').hide()
  $('#user-forms-view').show()
  $('#sign-out-success').text('Successfully signed out!')
  $('#all-games').text('')
  $('#game-message').text('')
  $('#game-error').text('')
  setTimeout(() => {
    $('#sign-out-success').text('')
  }, 3000)
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('.sign-out-fail').text('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('.sign-out-fail').text('')
  }, 3000)
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
