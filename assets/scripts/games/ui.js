// const store = require('./../store')

const newGameSuccess = function () {
  $('#alert-message').text('New game created!')
  $('form').trigger('reset')
}

const newGameFailure = function () {
  $('#alert-message').text('Something went wrong... please try again!')
}
module.exports = {
  newGameSuccess,
  newGameFailure
}
