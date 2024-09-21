function freezeSketch(p) {
  let freezeTimeOut = 10000 / slide.pA4;
  let freezeAlpha = slide.pA4 / 3;
  let freezeRate = 0.05

  p.setup = function () {
    bgScene = p.createCanvas(p.windowWidth, p.windowHeight);
    bgScene.id("freeze");
    p.frameRate(freezeRate)
    p.clear()
    p.noFill();
    Frosted(p);
    setInterval(function () {
      p.clear();
      Frosted(p);
    }, freezeTimeOut);
  }

  function Frosted(p) {
    p.frameRate(freezeRate)
    let strokeColor = p.color(slide.secondary2);
    strokeColor.setAlpha(freezeAlpha);
    p.stroke(255, freezeAlpha);

    for (let x = 0; x < 1000; x++) {
      let y1 = p.random(0, p.width);
      let y2 = p.random(0, p.height);
      p.line(y1, y2, y1, 0);
      p.stroke(strokeColor);
    }

    for (let x = 0; x < 1000; x++) {
      let y1 = p.random(0, p.width);
      let y2 = p.random(0, p.height);
      p.rect(y1, y2, 21, 232 / y1 - 3);
    }
  }
};

