'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // authentication
  authEvents.addHandlers()
  // game
  gameEvents.addHandlers()
  // initial view of application
  $('#user-welcome-view').hide()
  $('#change-password-view').hide()
  $('#play-game-view').hide()
  $('#game-over-view').hide()
})
