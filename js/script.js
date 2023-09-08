const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

document.body.appendChild(canvas)

const CANVAS_SIZE = 200
canvas.width = CANVAS_SIZE
canvas.height = CANVAS_SIZE

context.fillStyle = "#777777"
context.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE)
context.fillStyle = "#AAAAAA"
context.fillRect(0,0,CANVAS_SIZE/2,CANVAS_SIZE/2)
