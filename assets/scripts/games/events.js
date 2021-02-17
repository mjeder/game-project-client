'use strict'

const api = require('./api')
const ui = require('./ui')

// Set variables for game logic
let player = true
let gameOver = false
let board = ['', '', '', '', '', '', '', '', '']
let moves = 0

// Create a new game board when above handler is activated
const newGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)

  player = true
  board = ['', '', '', '', '', '', '', '', '']
  gameOver = false
  moves = 0
}

// Update game board as user plays game
const updateGame = function (index, player, over) {
  event.preventDefault()
  api.updateGame(index, player, over)
    .then(response => {
      ui.updateGameSuccess(response, index, player)
    })
    .catch(ui.updateGameFailure)
}

// As user plays game and board updates, check to see if there is a winner
const checkWinner = function () {
  // Make sure first cell isnt empty, then check if first cell is equal to
  // second cell, then check if second cell is equal to third cell.
  // CHECK THIS FOR ALL WINNINGS COMBOS
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    return true
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    return true
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    return true
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    return true
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    return true
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    return true
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    return true
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    return true
  }
  return false
}

// User plays game
const playGame = function (event) {
  const space = event.target
  let spaceValue

  // FIRST... Check to see if game is over
  if (gameOver === true) {
    $('#game-over').show().text('Game Over!')
  }

  // NEXT... Check to make sure the cell is empty
  if (board[space.id] !== '') {
    $('#game-alert').text('Please pick a space that is unoccupied!')
  }

  // NEXT... Check to make sure there isnt a draw
  // First, count total moves made so far
  moves++
  // Next, check if total moves equal 9 (full board) AND there is no winner
  if (moves === 9 && checkWinner() === false) {
    $('#game-over').show().text('Game Over!')
    $('#game-alert').show().text('Draw!')
    $('#player-move').hide()
    $('#game-over-view').show()
  }
  // NEXT... alternate between players until there is a winner or a draw is
  // triggered above

  // If user X makes a move then check to see if that was a winning move and
  // if it isnt then tell player O to make their move
  if (player === true) {
    spaceValue = 'X'
    board[space.id] = 'X'
    $('#player-move').text('Player O is currently up! Select any open space!')
    if (checkWinner() === true) {
      $('#game-over').show().text('Game Over!')
      $('#game-alert').show().text('Player X is the winner!')
      $('#player-move').hide()
      $('#game-over-view').show()
      gameOver = !gameOver
    }
    // If user O makes a move then check to see if that was a winning move and
    // if it isnt then tell player X to make their move
  } else {
    spaceValue = 'O'
    board[space.id] = 'O'
    $('#player-move').text('Player X is currently up! Select any open space!')
    if (checkWinner() === true) {
      $('#game-alert').show().text('Player O is the winner!')
      $('#player-move').hide()
      $('#game-over-view').show()
      gameOver = !gameOver
    }
  }
  // Rotate between players AND update game
  player = !player

  updateGame(space.id, spaceValue, gameOver)
}

const addHandlers = function () {
  $('#board-spaces').on('click', playGame) // Play game!
  $('#play-game').on('click', newGame) // Open new game board
}

module.exports = {
  addHandlers,
  playGame,
  checkWinner
}
