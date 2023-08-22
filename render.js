function setCanvasSize () {
  let canvas = document.getElementById('GameCanvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener('DOMContentLoaded', () => {
  setCanvasSize();
  let gameLoopObj = new GameLoop("GameCanvas");
  gameLoopObj.init(); 
  gameLoopObj.setRenderCallback(render);
})

window.addEventListener('resize', () => {
  setCanvasSize()
})

function render(tDelta) {
  // clear background
  this.context.fillStyle = '#ffffff';
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

  // TODO render sprites here

  // render fps
  let fps = (1 / tDelta).toFixed(2)
  this.context.fillStyle = '#000000';
  this.context.font = "15px";
  this.context.fillText(fps + "fps", 10, 20);
}
