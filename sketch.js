let img_r;
let img_m;
let img_l;

function preload(){
  img_r = loadImage('img/right.png');
  img_m = loadImage('img/middle.png');
  img_l = loadImage('img/left.png');
}

function setup() {
  createCanvas(400, 400);
  
  background(200,100,60);
  
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
  
  
  image(img_r, 0, 0, width, height, 0, 0, img_r.width, img_r.height, CONTAIN);
  
}
