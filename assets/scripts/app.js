'use strict'
const authEvents = require('./auth/events')

$(() => {
  // SIGN UP
  $('#sign-up').on('submit', authEvents.onSignUp)
  // SIGN IN
  $('#sign-in').on('submit', authEvents.onSignIn)
  // CHANGE PASSWORD
  $('#change-password').on('submit', authEvents.onChangePassword)
  // SIGN OUT
  $('#sign-out').on('click', authEvents.onSignOut)
})
