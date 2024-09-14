/*let noiseOverlay;

function setup() {
    noiseOverlay=createGraphics(windowWidth, windowHeight).parent('noise-container');
    noiseOverlay.id("noise-overlay");
  }
  
function draw() {
    background(0);
  
    let noiseScale = 0.1;
    for (let x = 0; x < width; x += 10) {
      for (let y = 0; y < height; y += 10) {
        let noiseValue = noise(x * noiseScale, y * noiseScale) * 255;
        fill(noiseValue);
        noStroke();
        ellipse(x, y, 5, 5);
      }
    }
  }*/

function paperFiber(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    p.frameRate(5);
    p.noLoop();
  };

  p.draw = function() {
    // createTexture();
    createFibers();
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  function createTexture() {
    const NUM_DOTS = 400;
    for (let i = 0; i < NUM_DOTS; i++) {
      let x = p.random() * p.width;
      let y = p.random() * p.height;
      let r = p.random(5, 15);
      p.ellipse(x, y, r);
    }
  }

  function createFibers() {
    let numFibers = 3000;
    for (let i = 0; i < numFibers; i++) {
      let x1 = p.random() * p.width;
      let y1 = p.random() * p.height;
      let theta = p.random() * 2 * Math.PI;
      let segmentLength = p.random() * 5 + 2;
      let x2 = p.cos(theta) * segmentLength + x1;
      let y2 = p.sin(theta) * segmentLength + y1;
      p.stroke(
        0,
        0,
        0,
        10
      );
      p.line(x1, y1, x2, y2);
    }
  }
};

new p5(paperFiber);