function setCanvasSize () {
  let canvas = document.getElementById('GameCanvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener('DOMContentLoaded', () => {
  setCanvasSize()
})

window.addEventListener('resize', () => {
  setCanvasSize()
})

let canvas;
let context;
let tLast;

window.onload = init;

function init(){
    canvas = document.getElementById('GameCanvas');
    context = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop); // TODO try from DOMCOntentLoad
}

function gameLoop(tCurrent){
  let tDeltaLoop = (tCurrent - tLast) / 1000
  tLast = tCurrent

  draw(tDeltaLoop);

  // Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}

function draw(tDelta){
  // clear background
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // TODO render stuff

  // render fps
  let fps = (1 / tDelta).toFixed(2)
  context.fillStyle = '#000000';
  context.font = "15px";
  context.fillText(fps + "fps", 10, 20);
}