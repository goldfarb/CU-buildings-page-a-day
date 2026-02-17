
let img_r;
let img_m;
let img_l;

function preload(){
  img_r = loadImage('https://alicegoldfarb.com/CU-buildings-page-a-day/days/img/right.png');
  img_m = loadImage('https://alicegoldfarb.com/CU-buildings-page-a-day/days/img/middle.png');
  img_l = loadImage('https://alicegoldfarb.com/CU-buildings-page-a-day/days/img/left.png');
}


function setup() {
  createCanvas(400, 400);
  
  
  background( 180 ,144,72);
  


  img_r.loadPixels();

      for (let i = 0; i < img_r.pixels.length; i += 4) {
        let r = img_r.pixels[i];
        let g = img_r.pixels[i + 1];
        let b = img_r.pixels[i + 2];

        img_r.pixels[i] = 25;   // New R
        img_r.pixels[i + 1] = 213; // New G
        img_r.pixels[i + 2] = 23; // New B
    }
  img_r.updatePixels();
  
  image(img_r, 0, 0, width, height, 0, 0, img_r.width, img_r.height, CONTAIN);

  

  img_m.loadPixels();

      for (let i = 0; i < img_m.pixels.length; i += 4) {
        let r = img_m.pixels[i];
        let g = img_m.pixels[i + 1];
        let b = img_m.pixels[i + 2];

        img_m.pixels[i] = 109;   // New R
        img_m.pixels[i + 1] = 58; // New G
        img_m.pixels[i + 2] = 93; // New B
    }
  img_m.updatePixels();
  
  image(img_m, 0, 0, width, height, 0, 0, img_m.width, img_m.height, CONTAIN);


  
  img_l.loadPixels();

      for (let i = 0; i < img_l.pixels.length; i += 4) {
        let r = img_l.pixels[i];
        let g = img_l.pixels[i + 1];
        let b = img_l.pixels[i + 2];

        img_l.pixels[i] = 207;   // New R
        img_l.pixels[i + 1] = 184; // New G
        img_l.pixels[i + 2] = 124; // New B
    }
  img_l.updatePixels();
  
  image(img_l, 0, 0, width, height, 0, 0, img_l.width, img_l.height, CONTAIN);
}
