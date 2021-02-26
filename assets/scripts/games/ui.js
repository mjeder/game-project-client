'use strict'

const store = require('./../store')

const createGameSuccess = function (response) {
  store.game = response.game
  $('#user-welcome-view').hide()
  $('#play-game-view').show()
  $('#player-move').html('Player ' + store.startPlayer + ' is currently up! Select any open space!')
}

const createGameFailure = function () {
  $('#game-alert').html('Something went wrong... please try again!')
}

const isTaken = function () {
  $('#game-alert').html('Uh oh! Looks like that space was already taken... please select any open space!')
  setTimeout(() => {
    $('#game-alert').html('')
  }, 2000)
}

const updateGameSuccess = function () {
  if ($('#player-move').html() === ('It\'s a tie!')) {
    return true
  }
  if ($('#player-move').html() !== ('Player ' + store.startPlayer + ' has won!')) {
    if (store.startPlayer === 'X') {
      store.startPlayer = 'O'
      $('#player-move').html('Player ' + store.startPlayer + ' is currently up! Select any open space!')
    } else {
      store.startPlayer = 'X'
      $('#player-move').html('Player ' + store.startPlayer + ' is currently up! Select any open space!')
    }
  }
}

const updateGameFailure = function () {
  $('#game-alert').text('Something went wrong... please try again!')
}

const winnerGameOver = function () {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
  $('#game-alert').html('Player ' + store.startPlayer + ' has won!')
  $('#board-spaces').css('pointer-events', 'none')
  $('#player-move').html('')
}

const drawGameOver = function () {
  store.over = true
  store.game.over = true
  $('#game-alert').html('It\'s a tie!')
  $('#board-spaces').css('pointer-events', 'none')
}

const playAgainSuccess = function (response) {
  store.game = response.game
  $('#game-alert').html('Player ' + store.startPlayer + ', it\'s your move!')
  $('#board-spaces').css('pointer-events', '')
  $('#board-spaces').show()
}

const playAgainFailure = function () {
  $('#game-alert').text('Something went wrong... please try again!')
}

const showTotalGamesSuccess = function (responseData) {
  const games = responseData.games
  let gamesHtml = ''
  games.forEach(game => {
    gamesHtml += `
      <p>User ID: ${game.owner}<p>
      <p>Cells Used: ${game.cells}<p>
      <p>Game Over: ${game.over}<p>
      <hr>
    `
  })
  $('#all-games').html(gamesHtml)
}

const showTotalGamesFailure = function () {
  $('#game-alert').html('Something went wrong... please try again!')
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
