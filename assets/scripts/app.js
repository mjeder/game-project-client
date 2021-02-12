'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // SIGN UP
  $('#sign-up').on('submit', authEvents.onSignUp)
  // SIGN IN
  $('#sign-in').on('submit', authEvents.onSignIn)
  // CHANGE PASSWORD
  $('#change-password').on('submit', authEvents.onChangePassword)
  // SIGN OUT
  $('#sign-out').on('click', authEvents.onSignOut)
  // NEW GAME
  $('#new-game').on('click', gameEvents.onNewGame)
})
