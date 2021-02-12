'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // ALL VIEWS FOR COPY AND PASTE
  // $('#welcome-view').hide()
  // $('#sign-in-view').hide()
  // $('#sign-up-view').hide()
  // $('#welcome-user-view').hide()
  // $('#change-password-view').hide()
  // $('#play-game-view').hide()
  // $('#game-over-view').hide()

  // WELCOME-VIEW
  $('#sign-in-view').hide()
  $('#sign-up-view').hide()
  $('#welcome-user-view').hide()
  $('#change-password-view').hide()
  $('#play-game-view').hide()
  $('#game-over-view').hide()

  // SIGN-IN-VIEW
  $('#welcome-sign-in-button').click(function () {
    $('#sign-in-view').show()
    $('#welcome-view').hide()
    $('#sign-up-view').hide()
    $('#welcome-user-view').hide()
    $('#change-password-view').hide()
    $('#play-game-view').hide()
    $('#game-over-view').hide()
  })
  // SIGN IN SUBMIT
  $('#sign-in').on('submit', authEvents.onSignIn)

  // SIGN-UP-VIEW
  $('#welcome-sign-up-button').click(function () {
    $('#sign-up-view').show()
    $('#welcome-view').hide()
    $('#sign-in-view').hide()
    $('#welcome-user-view').hide()
    $('#change-password-view').hide()
    $('#play-game-view').hide()
    $('#game-over-view').hide()
  })

  // SIGN UP SUBMIT
  $('#sign-up').on('submit', authEvents.onSignUp)

  // WELCOME-USER-VIEW
  $

  // WHEN NEW GAME BUTTON IS CLICKED
  $('#new-game-button').click(function () {
    $('#game-section').show('fast')
    $('#sign-out').show('fast')
  })

  // CHANGE PASSWORD
  $('#change-password').on('submit', authEvents.onChangePassword)
  // SIGN OUT
  $('#sign-out').on('click', authEvents.onSignOut)
  // NEW GAME
  $('#new-game-button').on('click', gameEvents.onNewGame)
})
