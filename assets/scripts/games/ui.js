const store = require('./../store')

const newGameSuccess = function () {
  $('#play-game-view').show()
}

const newGameFailure = function () {
  $('#new-game-alert').text('Something went wrong... please try again!')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
