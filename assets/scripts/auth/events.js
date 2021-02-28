const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const addHandlers = function () {
  // Sign Up forms submitted, trigger Sign Up function
  $('#sign-up').on('submit', onSignUp)
  // Sign In forms submitted, trigger Sign In function
  $('#sign-in').on('submit', onSignIn)
  // Change Password button clicked, open Change Password view
  $('#change-password-button').on('click', showChangePassword)
  // Change Password form submitted, trigger Change Password function
  $('#change-password').on('submit', onChangePassword)
  // Sign Out button clicked, trigger Sign Out function
  $('.sign-out-button').on('click', onSignOut)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const showChangePassword = function () {
  $('#change-password-view').show()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
