'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // ALL VIEWS FOR COPY AND PASTE
  $('#welcome-view').hide()
  // $('#sign-up-view').hide()
  // $('#sign-in-view').hide()
  // $('#welcome-user-view').hide()
  // $('#change-password-view').hide()
  $('#play-game-view').hide()
  // $('#game-over-view').hide()

  // IF sign up form is completed and submitted...
  // SIGN UP
  $('#sign-up').on('submit', authEvents.onSignUp)

  // IF sign in form is completed and submitted...
  // SIGN IN
  $('#sign-in').on('submit', authEvents.onSignIn)

  // IF change password form is completed and submitted...
  // CHANGE PASSWORD
  $('#change-password').on('submit', authEvents.onChangePassword)

  // IF sign out button is clicked...
  // SIGN OUT
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // IF new game button is clicked...
  // NEW GAME
  $('#new-game-button').on('click', gameEvents.onNewGame)
})
