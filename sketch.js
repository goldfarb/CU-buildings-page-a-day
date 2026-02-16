let img_r;


// Load the image.
function preload() {
  img_r = loadImage('/img/right.png');

}

function setup() {
  createCanvas(400, 400);

  background(240,200,180);

	fill("red");
  text("hello",50,50);

  img_r.loadPixels();

      for (let i = 0; i < img_r.pixels.length; i += 4) {
        let r = img_r.pixels[i];
        let g = img_r.pixels[i + 1];
        let b = img_r.pixels[i + 2];

        img_r.pixels[i] = 0;   // New R
        img_r.pixels[i + 1] = 110; // New G
        img_r.pixels[i + 2] = 255; // New B
    }


    img_r.updatePixels();

  // Draw the image and scale it to fit within the canvas.
  image(img_r, 0, 0, width, height, 0, 0, img_r.width, img_r.height, CONTAIN);




}

