'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addHandlers = function () {
  // OPEN NEW GAME BOARD
  $('#play-game').on('click', newGame)
  // PLAY GAME!
  $('#board-spaces').on('click', playGame)
}

// creating a new game and playing again
const onCreateGame = function () {
  if (store.over === true) {
    store.startPlayer = 'X'
    store.cells = ['', '', '', '', '', '', '', '', '']
    const space = $('.space')
    space.html(space.html().replace('X', ''))
    space.html(space.html().replace('0', ''))
    api.createGame()
      .then(ui.playAgainSuccess)
      .catch(ui.playAgainFailure)
  } else {
    store.startPlayer = 'X'
    store.cells = ['', '', '', '', '', '', '', '', '']
    const space = $('.space')
    space.html(space.html().replace('X', ''))
    space.html(space.html().replace('0', ''))
    api.createGame()
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
  }
}

// check for a winner
// 1. make sure space has an X or O (if empty return false)
// 2. check if next space has the same value as first space (if not, return false)
// 3. check if next space has the same value as the first and second spaces (if not, return false)
const checkWinner = function () {
  if (store.cells[0] !== '' && store.cells[0] === store.cells[1] && store.cells[1] === store.cells[2]) {
    return true
  } else if (store.cells[3] !== '' && store.cells[3] === store.cells[4] && store.cells[4] === store.cells[5]) {
    return true
  } else if (store.cells[6] !== '' && store.cells[6] === store.cells[7] && store.cells[7] === store.cells[8]) {
    return true
  } else if (store.cells[0] !== '' && store.cells[0] === store.cells[3] && store.cells[3] === store.cells[6]) {
    return true
  } else if (store.cells[1] !== '' && store.cells[1] === store.cells[4] && store.cells[4] === store.cells[7]) {
    return true
  } else if (store.cells[2] !== '' && store.cells[2] === store.cells[5] && store.cells[5] === store.cells[8]) {
    return true
  } else if (store.cells[0] !== '' && store.cells[0] === store.cells[4] && store.cells[4] === store.cells[8]) {
    return true
  } else if (store.cells[2] !== '' && store.cells[2] === store.cells[4] && store.cells[6]) {
    return true
  }
  return false
}

// VARIABLES FOR GAME LOGIC
let player = true
let gameOver = false
let board = ['', '', '', '', '', '', '', '', '']
let moves = 0

// CREATE NEW GAME BOARD
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

// GAME LOGIC
const playGame = function (event) {
  const space = event.target
  let spaceValue

  // Check if space is empty
  // If it is... start with player X (true)
  if ($(event.target).text() === '') {
    if (player === true) {
      spaceValue = 'X'
      board[space.id] = 'X'
      $('#player-move').text('Player O is currently up! Select any open space!')
      if (checkWinner() === true) {
        $('#board-spaces').css('pointer-events', 'none')
        $('#game-over').show().text('Game Over!')
        $('#game-alert').show().text('Player X is the winner!')
        $('#player-move').hide()
        $('#game-over-view').show()
        gameOver = !gameOver
      }
    // After player X makes their move... switch to player O (false)
    } else {
      spaceValue = 'O'
      board[space.id] = 'O'
      $('#player-move').text('Player X is currently up! Select any open space!')
      if (checkWinner() === true) {
        $('#board-spaces').css('pointer-events', 'none')
        $('#game-over').show().text('Game Over!')
        $('#game-alert').show().text('Player O is the winner!')
        $('#player-move').hide()
        $('#game-over-view').show()
        gameOver = !gameOver
      }
    }
    // IF space is occupied return alert message
  } else {
    $('#game-alert').text('Please pick a space that is unoccupied!')
    setTimeout(() => {
      $('#game-alert').text('')
    }, 2000)
  }
  // Rotate between players AND update game
  player = !player

  // Check to see if game is over
  if (gameOver === true) {
    $('#game-over').show().text('Game Over!')
    $('#board-spaces').css('pointer-events', 'none')
  }

  // Check to make sure there isnt a draw
  // First, count total moves made so far
  moves++
  // Next, check if total moves equal 9 (full board) AND there is no winner
  if (moves === 9 && checkWinner() === false) {
    $('#game-over').show().text('Game Over!')
    $('#game-alert').show().text('It\'s a Draw!')
    $('#board-spaces').css('pointer-events', 'none')
    $('#player-move').hide()
    $('#game-over-view').show()
  }

  // Update game
  updateGame(space.id, spaceValue, gameOver)
}

// UPDATE GAME BOARD
const updateGame = function (index, player, over) {
  event.preventDefault()
  api.updateGame(index, player, over)
    .then(response => {
      ui.updateGameSuccess(response, index, player)
    })
    .catch(ui.updateGameFailure)
}

module.exports = {
  addHandlers,
  playGame,
  checkWinner
}
