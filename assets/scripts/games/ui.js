'use strict'

const store = require('./../store')

// IF Create Game is successful: create and store game data, hide unnecessary views,
// show game board, allow clicks in empty spaces, show message that player X is up.
const createGameSuccess = function (response) {
  store.game = response.game
  $('#user-welcome-view').hide()
  $('#change-password-view').hide()
  $('#game-over-view').hide()
  $('#play-game-view').show()
  $('#board-spaces').css('pointer-events', '')
  $('#game-message').html('Player ' + store.startPlayer + ' is currently up! Select any open space!')
}

// IF Create Game fails (it wont): show message
const createGameFailure = function () {
  $('#game-error').html('Something went wrong... please try again!')
}

// IF selected space is occupied: dont allow a user click and show message, hide message after 2 sec.
const isTaken = function () {
  $('#game-error').html('Uh oh! Looks like that space was already taken... please select any open space!')
  setTimeout(() => {
    $('#game-error').html('')
  }, 2000)
}

// IF Update Game board is successful: first check to make sure the game isnt over,
// if it is then itll move to functions below. If it isnt, then rotate players
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

// IF Update Game fails: show message
const updateGameFailure = function () {
  $('#game-error').text('Something went wrong... please try again!')
}

// IF a winning combo is detected in events.js then do the following: update stored game data to over,
// show message of who won, dont allow any clicks, show game over view.
const winnerGameOver = function () {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
  $('#game-message').html('Player ' + store.startPlayer + ' has won!')
  $('#board-spaces').css('pointer-events', 'none')
  $('#game-over-view').show()
}

// IF a draw combo is detected in events.js then do the following: update stored game data to over,
// show message of draw, dont allow any clicks, show game over view.
const drawGameOver = function () {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
  $('#game-message').html('It\'s a tie!')
  $('#board-spaces').css('pointer-events', 'none')
  $('#game-over-view').show()
}

// IF Show Total Games is successful: get the length of the array of game objects,
// show message with total game number attached on the end.
const showTotalGamesSuccess = function (responseData) {
  const games = responseData.games.length
  $('#all-games').html('Total Games Played: ' + games)
}

// IF Show Total Games fails: show message
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
  showTotalGamesSuccess,
  showTotalGamesFailure
}
