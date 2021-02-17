'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
  $('#user-welcome-view').hide()
  $('#change-password-view').hide()
  $('#play-game-view').hide()
  $('#game-over-view').hide()
})
