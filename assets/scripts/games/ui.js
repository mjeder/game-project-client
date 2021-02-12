// const store = require('./../store')

const newGameSuccess = function (responseData) {
  const game = responseData.game
  console.log(responseData)

  const boardZero = `<p>0${game.cells[0]}</p>`
  const boardOne = `<p>1${game.cells[1]}</p>`
  const boardTwo = `<p>2${game.cells[2]}</p>`
  const boardThree = `<p>3${game.cells[3]}</p>`
  const boardFour = `<p>4${game.cells[4]}</p>`
  const boardFive = `<p>5${game.cells[5]}</p>`
  const boardSix = `<p>6${game.cells[6]}</p>`
  const boardSeven = `<p>7${game.cells[7]}</p>`
  const boardEight = `<p>8${game.cells[8]}</p>`

  $('#board-0').html(boardZero)
  $('#board-1').html(boardOne)
  $('#board-2').html(boardTwo)
  $('#board-3').html(boardThree)
  $('#board-4').html(boardFour)
  $('#board-5').html(boardFive)
  $('#board-6').html(boardSix)
  $('#board-7').html(boardSeven)
  $('#board-8').html(boardEight)

  $('#play-game-view').show()
  $('#welcome-user-view').hide()
}

const newGameFailure = function () {
  $('#new-game-fail').text('Something went wrong... please try again!')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
