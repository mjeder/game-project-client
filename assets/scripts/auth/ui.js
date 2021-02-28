const store = require('./../store')

// IF Sign Up is successful: reset forms, show message, hide after 4 sec
const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#sign-up-alert').text('Account created! Please sign in below!')
  setTimeout(() => {
    $('#sign-up-alert').text('')
  }, 4000)
}

// IF Sign Up fails: reset forms, show message, hide after 3 sec
const signUpFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-up-alert').text('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#sign-up-alert').text('')
  }, 3000)
}

// IF Sign In is successful: store user info, reset forms, hide current view, show profile view
const signInSuccess = function (response) {
  store.user = response.user
  $('form').trigger('reset')
  $('#user-welcome-view').show()
  $('#user-forms-view').hide()
}

// IF Sign In fails: reset forms, show message, hide after 3 sec
const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-in-alert').text('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#sign-in-alert').text('')
  }, 3000)
}

// IF Change Password is successful: reset form, hide form view, show confirmation message for 2 sec
const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#change-password-view').hide()
  $('#change-password-alert').text('Password successfully changed!')
  setTimeout(() => {
    $('#change-password-alert').text('')
  }, 2000)
}

// IF Change Password fails: reset form, show message, hide after 2 sec
const changePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#change-password-alert').text('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#change-password-alert').text('')
  }, 2000)
}

// IF Sign Out is successful: ensure game is set to over, reset forms, hide unnecessary views,
// reset game messages, confirm sign out to user on welcome screen, hide after 3 sec.
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

// IF Sign Out fails: reset forms, show message, hide message after 3 sec
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
