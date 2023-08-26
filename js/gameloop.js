class GameLoop {
    constructor(idName) {
      this.canvas = document.getElementById(idName);
      this.context = this.canvas.getContext('2d');
      this.tLast;
    }

    init() {
      // Start the first frame request
      window.requestAnimationFrame((t) => this.spin(t));
    }

    spin(timestamp){
      let tDeltaLoop = (timestamp - this.tLast) / 1000
      this.tLast = timestamp

      this.render(tDeltaLoop);

      // Keep requesting new frames
      window.requestAnimationFrame((t) => this.spin(t));
    }

    setRenderCallback(callback) {
      this.render = callback;
    }

  }
