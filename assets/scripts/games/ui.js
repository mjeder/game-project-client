'use strict'

const store = require('./../store')

const createGameSuccess = function (board) {
  store.game = board.game
  for (let i = 0; i < board.game.cells.length; i++) {
    const space = $('#' + i)
    space.text('').removeClass('O').removeClass('X')
  }
  $('#play-game-view').show()
  $('#player-move').text('Player X is currently up! Select any open space!')
  $('#user-welcome-view').hide()
}

const createGameFailure = function () {
  $('#new-game-alert').text('Something went wrong... please try again!')
}

const updateGameSuccess = function (response, index, player) {
  const space = $('#' + index)
  space.text(player).addClass(player)
}

const updateGameFailure = function () {
  $('#game-alert').text('update went wrong... please try again!')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
