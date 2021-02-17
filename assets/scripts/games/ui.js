const store = require('./../store')

const newGameSuccess = function (response) {
  store.game = response.game
  $('cell').html('')
  $('player-alert').text('Player X is currently up!')
}

const newGameFailure = function () {
  $('#new-game-alert').text('Something went wrong... please try again!')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
