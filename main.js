import Maze from './maze.js';
import Player from './player.js';

const mazeWidth = 10;
const mazeHeight = 10;

const mazeLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 3, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const maze = new Maze(mazeWidth, mazeHeight, mazeLayout);
const player = new Player(maze, maze.playerPosition);

const mazeContainer = document.getElementById('maze');

const finishImage = document.createElement('img');
finishImage.src = 'images/finish-flag.jpg';
finishImage.alt = 'Finish';
finishImage.style.width = '30px';
finishImage.style.height = '30px';

for (let i = 0; i < mazeHeight; i++) {
  for (let j = 0; j < mazeWidth; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (mazeLayout[i][j] === 1) {
      cell.classList.add('wall');
    }

    if (mazeLayout[i][j] === 3) {
      cell.classList.add('player-cell');
      cell.appendChild(finishImage);
    }

    if (mazeLayout[i][j] === 2) {
      cell.classList.add('player');
    }

    mazeContainer.appendChild(cell);
  }
}

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      player.moveUp();
      break;
    case 'ArrowDown':
      player.moveDown();
      break;
    case 'ArrowLeft':
      player.moveLeft();
      break;
    case 'ArrowRight':
      player.moveRight();
      break;
  }
});
