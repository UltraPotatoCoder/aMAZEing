class Player {
  constructor(maze, initialPosition) {
    this.position = initialPosition;
    this.maze = maze;
  }

  moveUp() {
    const targetPosition = this.position - this.maze.width;
    if (this.maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      this.maze.checkWinCondition();
    }
  }

  moveDown() {
    const targetPosition = this.position + this.maze.width;
    if (this.maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      this.maze.checkWinCondition();
    }
  }

  moveLeft() {
    const targetPosition = this.position - 1;
    if (this.maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      this.maze.checkWinCondition();
    }
  }

  moveRight() {
    const targetPosition = this.position + 1;
    if (this.maze.isValidMove(targetPosition)) {
      this.movePlayer(targetPosition);
      this.maze.checkWinCondition();
    }
  }

  movePlayer(targetPosition) {
    document
      .getElementsByClassName('cell')
      [this.position].classList.remove('player');
    this.position = targetPosition;
    this.maze.setPlayerPosition(targetPosition);
    document
      .getElementsByClassName('cell')
      [this.position].classList.add('player');
  }
}

export default Player;
