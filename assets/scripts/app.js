'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp) // SIGN UP

  $('#sign-in').on('submit', authEvents.onSignIn) // SIGN IN

  $('#change-password').on('submit', authEvents.onChangePassword) // CHANGE PASSWORD

  $('#sign-out').on('click', authEvents.onSignOut) // SIGN OUT

  $('#play-game').on('click', gameEvents.onNewGame) // PLAY GAME
})
