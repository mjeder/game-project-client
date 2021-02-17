const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp) // SIGN UP
  $('#sign-in').on('submit', onSignIn) // SIGN IN
  $('#change-password-button').on('click', showChangePassword) // SHOW CHANGE PASSWORD FORM
  $('#change-password').on('submit', onChangePassword) // CHANGE PASSWORD
  $('.sign-out-button').on('click', onSignOut) // SIGN OUT
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
  api.signOut()
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
