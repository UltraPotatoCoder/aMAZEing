class Player {
  constructor(maze, initialPosition) {
    this.position = initialPosition;
    this.maze = maze;
  }

  moveUp() {
    const targetPosition = this.position - mazeWidth;
    if (maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      maze.checkWinCondition();
    }
  }

  moveDown() {
    const targetPosition = this.position + mazeWidth;
    if (maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      maze.checkWinCondition();
    }
  }

  moveLeft() {
    const targetPosition = this.position - 1;
    if (maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      maze.checkWinCondition();
    }
  }

  moveRight() {
    const targetPosition = this.position + 1;
    if (maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      maze.checkWinCondition();
    }
  }

  movePlayer(targetPosition) {
    document
      .getElementsByClassName('cell')
      [this.position].classList.remove('player');
    this.position = targetPosition;
    document
      .getElementsByClassName('cell')
      [this.position].classList.add('player');
  }
}

export default Player;
