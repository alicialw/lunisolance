p5.prototype.windowResized = function() {
  this.resizeCanvas(this.windowWidth, this.windowHeight);
};

let bgScene

/*function textureSketch(p) {
  let c0;

  p.setup = function() {
    bgScene = p.createCanvas(p.windowWidth, p.windowHeight);
    bgScene.id('texture')
    bgScene.parent('textureContainer');
    p.background(0,0)
    c0 = p.color(255,5)
  };

  p.draw = function() {
    p.clear(); 
    drawtextureSketch(); 
}

  function drawtextureSketch() {
    for (let i = 0; i < 100000; i++) {
      const x = p.random(0, p.width);
      const y = p.random(0, p.height);

      const pCoords = {
        x1: x,
        y1: y,
        x2: x + p.random(-0.5, 0.5),
        y2: y + p.random(-0.5, 0.5),
        x3: x + p.random(-50, 50),
        y3: y + p.random(-50, 50),
      }

      p.fill(255,5);
      p.stroke(c0);
      p.drawingContext.setLineDash([5, 5]);

      p.triangle(
        pCoords.x1, pCoords.y1,
        pCoords.x2, pCoords.y2,
        pCoords.x3, pCoords.y3
      );
    }
    p.noLoop();
  }
  /*p.keyPressed = function() {
      p.clear()
      p.newColor();
      drawtextureSketch();
      p.noLoop();
  }

  p.mouseClicked = function() {
    p.clear()
    p.newColor();
    drawtextureSketch();
    p.noLoop();
}
}; */


new p5(textureSketch);



