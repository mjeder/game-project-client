'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addHandlers = function () {
  // Click play-game button to create game which opens a new game board in ui
  $('.play-game').on('click', createGame)
  // Click on spaces in game board to play game
  $('#board-spaces').on('click', playGame)
  // Click view-games button to show total games played
  $('#view-games').on('click', showTotalGames)
}

// creating a new game and playing again
const createGame = function () {
  if (store.over === true) {
    store.startPlayer = 'X'
    store.cells = ['', '', '', '', '', '', '', '', '']
    const space = $('.space')
    space.html(space.html().replace('X', '')).removeClass(store.startPlayer)
    space.html(space.html().replace('0', '')).removeClass(store.startPlayer)
    api.createGame()
      .then(ui.playAgainSuccess)
      .catch(ui.playAgainFailure)
  } else {
    store.startPlayer = 'X'
    store.cells = ['', '', '', '', '', '', '', '', '']
    const space = $('.space')
    space.html(space.html().replace('X', '')).removeClass(store.startPlayer)
    space.html(space.html().replace('0', '')).removeClass(store.startPlayer)
    api.createGame()
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
  }
}

// check for a winner
// 1. make sure space has an X or O (if empty return false)
// 2. check if next space has the same value as first space (if not, return false)
// 3. check if next space has the same value as the first and second spaces (if not, return false)
const checkForWinner = function () {
  if ((store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') || (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O') ||
  (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') || (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O') ||
  (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') || (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O') ||
  (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') || (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O') ||
  (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') || (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O') ||
  (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') || (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O') ||
  (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') || (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O') ||
  (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') || (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O')) {
    ui.winnerGameOver()
    return true
  } else if (checkForDraw()) {
    return true
  }
  return false
}

// check for a draw
const checkForDraw = function () {
  if ((store.cells[0] === 'X' || store.cells[0] === 'O') && (store.cells[1] === 'X' || store.cells[1] === 'O') &&
  (store.cells[2] === 'X' || store.cells[2] === 'O') && (store.cells[3] === 'X' || store.cells[3] === 'O') &&
  (store.cells[4] === 'X' || store.cells[4] === 'O') && (store.cells[5] === 'X' || store.cells[5] === 'O') &&
  (store.cells[6] === 'X' || store.cells[6] === 'O') && (store.cells[7] === 'X' || store.cells[7] === 'O') &&
  (store.cells[8] === 'X' || store.cells[8] === 'O')) {
    ui.drawGameOver()
    return true
  }
  return false
}

// play the game
// make sure the selected space is unoccupied
// if unoccupied, insert X or O and update game.
const playGame = function (event) {
  if ($(event.target).text() === 'X' || $(event.target).text() === 'O') {
    ui.isTaken()
    return true
  } else if ($(event.target).text('')) {
    $(event.target).text(store.startPlayer).addClass(store.startPlayer)
    store.cells[event.target.id] = store.startPlayer
    api.updateGame(event.target.id, store.startPlayer, checkForWinner())
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

// show total games played for user
const showTotalGames = function (event) {
  event.preventDefault()
  api.showGames()
    .then(ui.showTotalGamesSuccess)
    .catch(ui.showTotalGamesFailure)
}

module.exports = {
  createGame,
  checkForWinner,
  checkForDraw,
  playGame,
  showTotalGames,
  addHandlers
}
