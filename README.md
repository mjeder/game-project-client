## Matt's Game of Tic Tac Toe
This is my first project at General Assembly and the goal was to create a Tic
Tac Toe web application that is hosted live on GH-Pages. The main objectives
were to:
- Separate HTML, CSS, and JavaScript files in your application
- Build an application to a spec that someone else gives you
- Use your programming skills to solve the game logic for a game
- Code an interactive game that allows a user to play tic tac toe against themself
- Communicate with a back-end (which we'll provide for you) to store the state of your game.
- Craft a README.md file that explains your app to the world

### Important Links
[API](https://git.generalassemb.ly/ga-wdi-boston/game-project-api)

[Deployed Client](https://mjeder.github.io/game-project-client/)

### Planning Story
I started off by writing down as many user stories I could think of which then
gave me the inspiration to start drawing out my wireframe. This led me to having
a solid idea of how I wanted to sketch out my HTML and JS files.

Once I built out my foundatation I ran through the the following checklist:

**Application**
- User must be able to sign up
- User must be able to sign in
- Signed in user must be able to change password
- Signed in user must be able to sign out
- Signed in user user must be able to start a tic tac toe game
- When playing game, user must start as X and then rotate between X and O
- When playing game, user must only select available spaces on the board
- When playing game, user must be notified when win, loss or tie occurs
- Once a game is over, user must not be able to add to that board
- Once a game is over, user must be able to play again
- Signed in user must be able to view number of games played

**API**
- Sign up POST /sign-up
- Sign in POST /sign-in
- Change password PATCH /change-password
- Sign out DELETE /sign-out
- New game POST /games
- Update game PATCH /games/:id
- View number of games played GET /games
- Give feedback to the user after each action's success or failure.
- All forms must clear after submit success


### User Stories
- as a user, I want a sign up form so that I can create an account.
- as a user, I want a sign in form so that I can log into my account.
- as a user, I want a change password form so that I can change my account
password.
- as a user, I want a play game button so that I can start a game of tic tac
toe.
- as a user, I want to be able to click directly on the board so that I can
choose where I want to place my game piece.
- as a user, I want a results screen so that I can know the final outcome of
the game.
- as a user, I want a play again button so that I can play as many games as I
would like.
- as a user, I want a view all games button so that I can view my playing
history.
- as a user, I want a sign out button so that I can close out my account.
- as a user, I want a flexible design so that I can play on my lap top, tablet,
or phone.

### Technologies Used
- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- Ajax

### Unsolved Problems
Still need to:
- Input a `play again` function after a game is complete
- When signing out, clear everything so another user can log in without
refeshing the page

Would like to eventually:
- Add AI so a user can play against the computer at different skill levels

##### Wireframe:
[Wireframe Link](https://wireframepro.mockflow.com/view/tictactoe-wireframe-eder#/page/56232057d2ca4ded9e253877b5304c5d)
