class Maze {
  constructor(width, height, layout) {
    this.width = width;
    this.height = height;
    this.layout = layout;
    this.playerPosition = this.findPlayerPosition();
  }

  findPlayerPosition() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.layout[i][j] === 2) {
          return i * this.width + j;
        }
      }
    }
    return 0;
  }

  isValidMove(targetPosition) {
    return (
      targetPosition >= 0 &&
      targetPosition < this.width * this.height &&
      this.layout[Math.floor(targetPosition / this.width)][
        targetPosition % this.width
      ] !== 1
    );
  }

  checkWinCondition() {
    if (
      this.layout[Math.floor(this.playerPosition / this.width)][
        this.playerPosition % this.width
      ] === 3
    ) {
      alert('Congratulations! You won!');
    }
  }
}

export default Maze;
