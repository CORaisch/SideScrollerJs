function setCanvasSize() {
  let canvas = document.getElementById('GameCanvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

let forestBg;


window.addEventListener('DOMContentLoaded', () => {
  setCanvasSize();
  forestBg = new Sprite(
    "./assets/forestBackground.png",
    0, 0, window.innerWidth, window.innerHeight
  );
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

  // render sprites here
  this.context.drawImage(forestBg.data, 0, 0);

  // render fps
  let fps = (1 / tDelta).toFixed(2)
  this.context.fillStyle = '#000000';
  this.context.font = "15px";
  this.context.fillText(fps + "fps", 10, 20);
}
