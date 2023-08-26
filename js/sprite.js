class Sprite {
  constructor(path, x, y, width, height) {
    this.path = path;
    this, x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.img = new Image();
    this.img.src = this.path;
    this.img.onload = () => {
      Promise.all([
        // Cut out one sprite from the sprite sheet
        createImageBitmap(
          this.img, this.x, this.y,
          this.width, this.height
        ),
      ]).then((sprite) => {
        this.data = sprite[0];
      });
    }
  }
}