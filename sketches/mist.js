 function mistSketch(p) {
    let m = slide.pA3;
    let amp = slide.pA3;
    let gridSize;
    let xoffset = -20;
    let yoffset = -100;
  
    p.setup = function() {
      bgScene = p.createCanvas(p.windowWidth, p.windowHeight);
      bgScene.id("mist");
      gridSize = p.width / m;
      p.strokeWeight(1);
      p.fill(0,0)
      p.clear()
    };
  
    p.draw = function() {
      let strokeColor = p.color(slide.secondary2);
      strokeColor.setAlpha(slide.pA3 / 2); 
      p.stroke(strokeColor);
      // p.fill(strokeColor);
      p.fill(0,0)

      let alpha = 0;
      p.clear()
      for (let i = 1; i < m - 1; i++) {
        p.beginShape();
        for (let j = 0; j < m; j++) {
          alpha = p.noise(0.1 * i + p.frameCount * 0.005, 0.1 * j + p.frameCount * 0.005);
          p.curveVertex(xoffset + gridSize * 1.2 * j, yoffset + gridSize * 1.3 * i + amp * alpha);
        }
        p.endShape();

      }
    };
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      gridSize = p.width / m;
      console.log(m)
    };
  };
  
