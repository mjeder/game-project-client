const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = function (event) {
  $('#play-game-view').show()
  const data = '{}'
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onNewGame
}

// store.startPlayer = 'X'
// store.cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
