'use strict'

const store = require('./../store')

const createGameSuccess = function (response) {
  store.game = response.game
  $('#user-welcome-view').hide()
  $('#change-password-view').hide()
  $('#game-over-view').hide()
  $('#play-game-view').show()
  $('#game-message').html('Player ' + store.startPlayer + ' is currently up! Select any open space!')
}

const createGameFailure = function () {
  $('#game-error').html('Something went wrong... please try again!')
}

const isTaken = function () {
  $('#game-error').html('Uh oh! Looks like that space was already taken... please select any open space!')
  setTimeout(() => {
    $('#game-error').html('')
  }, 2000)
}

const updateGameSuccess = function () {
  if ($('#game-message').html() === ('It\'s a tie!')) {
    return true
  }
  if ($('#game-message').html() !== ('Player ' + store.startPlayer + ' has won!')) {
    if (store.startPlayer === 'X') {
      store.startPlayer = 'O'
      $('#game-message').html('Player ' + store.startPlayer + ' is currently up! Select any open space!')
    } else {
      store.startPlayer = 'X'
      $('#game-message').html('Player ' + store.startPlayer + ' is currently up! Select any open space!')
    }
  }
}

const updateGameFailure = function () {
  $('#game-error').text('Something went wrong... please try again!')
}

const winnerGameOver = function () {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
  $('#game-message').html('Player ' + store.startPlayer + ' has won!')
  $('#board-spaces').css('pointer-events', 'none')
  $('#game-over-view').show()
}

const drawGameOver = function () {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
  $('#game-message').html('It\'s a tie!')
  $('#board-spaces').css('pointer-events', 'none')
  $('#game-over-view').show()
}

const playAgainSuccess = function (response) {
  store.game = response.game
  $('#game-message').html('Player ' + store.startPlayer + ', is currently up! Select any open space!')
  $('#board-spaces').css('pointer-events', '')
  $('#board-spaces').show()
}

const playAgainFailure = function () {
  $('#game-error').text('Something went wrong... please try again!')
}

const showTotalGamesSuccess = function (responseData) {
  const games = responseData.games.length
  $('#all-games').html('Total Games Played: ' + games)
}

const showTotalGamesFailure = function () {
  $('#game-error').html('Something went wrong... please try again!')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  isTaken,
  updateGameSuccess,
  updateGameFailure,
  winnerGameOver,
  drawGameOver,
  playAgainSuccess,
  playAgainFailure,
  showTotalGamesSuccess,
  showTotalGamesFailure
}
