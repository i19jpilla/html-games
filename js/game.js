class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.canvasSize = Math.min(this.canvas.width, this.canvas.height)
    this.ctx = this.canvas.getContext("2d")
  }

  start() {
    this._intervalID = setInterval(() => {
      this.render()
    }, 500)
  }

  render() {

  }

  stop() {
    clearInterval(this._intervalID)
  }
}