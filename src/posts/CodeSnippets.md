---
title: Have Fun With Tic Tac Toe
date: 2020-11-15
---

This is a simple tic tac toe game I built. Generally speaking, this kind of project that requires a
lot of javascript needs to be broken down into small parts to think about.

![](/images/ttt1.png)

In the beginning, I would imagine myself as a player, I would like to be able to click on each cell,
and the content in each cell will be the conversion between "X" and "O" according to which player's
turn. It’s better to have a message that reminds me of whose turn it is. After the game is over, I
would like to have a button to reset the game.

You only need to create three functions to make this game work, namely: clickCell(e), checkWinner()
and resetGame().

### function clickCell(e)

In this function, I set a target variable to accurately capture each cell clicked by our mouse. Then
use the if statement to switch the player, and add the class name of "x" or "o" to the cell that the
player clicks, and use another if statement to prevent the cell from being clicked again.

```js
function clickCell(e) {
  let target = e.target;

  if (target.classList[2] === 'x' || target.classList[2] === 'o') {
    return;
  }

  if (turnX) {
    target.classList.add('x');
    checkWinner();
  } else {
    target.classList.add('o');
    checkWinner();
  }
}
```

### functiton checkWinner()

In this function, Because I have added the "x" or "o" class name to the classList of the clicked
cell, I only need to set up all possible wins based on the location of each cell and other cells
with the same classList. At the end of the game, there will be three results: "x has won", "o has
won" and "game is tied". Don’t worry, there will be an amazing pop-up window at the end to tell you
the result of the game.

```js
 else {
    turnX = !turnX;
    if (turnX) {
      player1.classList.toggle('selected');
      player2.classList.toggle('selected');
      board.classList.add('x');
      board.classList.remove('o');
    } else {
      player2.classList.toggle('selected');
      player1.classList.toggle('selected');
      board.classList.add('o');
      board.classList.remove('x');
    }
  }

```

### function resetGame()

Now to the last part, clear all the cell classLists and set the default turn to x.

```js
function resetGame() {
  turnX = true;

  player1.classList.add('selected');
  player2.classList.remove('selected');

  board.classList.add('x');
  board.classList.remove('o');

  for (const cell of cellContainer) {
    cell.classList.remove('x');
    cell.classList.remove('o');
  }
}
```

The last thing to do is to add eventListener to all the cells and the reset button.

Now you have a functioning tic tac toe game, have fun with it!

You can also make this game cooler. For example, I set up a special effect of hovering over the
cell. It will show the chess pieces held by the next player. Use your imagination!

![](/images/ttt2.png)
