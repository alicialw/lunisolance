let drops;

function rainSketch(p) {
  let d = [];

  p.setup = function () {
    bgScene = p.createCanvas(p.windowWidth, p.windowHeight);
    bgScene.id("rain");
    p.noFill();
    for (let i = 0; i < slide.pA1; i++) {
      d[i] = new drops(p);
    }
  };

  p.draw = function () {
    p.noStroke();
    p.frameRate();
    p.clear();
    p.rect(0, 0, p.width, p.height);

    for (let i = 0; i < d.length; i++) {
      if (d[i].y > d[i].endPos) {
        d[i].end();
      } else {
        d[i].display();
      }
    }
  };

  class drops {
    constructor(p) {
      this.p = p;
      this.init();
    }

    init() {
      this.x = this.p.random(this.p.width);
      this.y = this.p.random(-300, 0);
      this.speed = this.p.random(1, 4) * 25;
      this.c1 = this.p.color(slide.secondary2);
      this.c2 = this.p.color(slide.secondary1);
      this.c1.setAlpha(150);
      this.c2.setAlpha(150);
      this.ellipseX = 0;
      this.ellipseY = 0;
      this.endPos = this.p.height - 100 - this.p.random(this.p.height * 0.4);
    }

    update() {
      this.y += this.speed;
    }

    display() {
      this.p.strokeWeight(0.5);
      this.p.stroke(this.c1);
      this.p.rect(this.x, this.y, 1, 150);
      this.update();
    }

    end() {
      this.p.stroke(this.c2);
      this.p.strokeWeight(2);
      this.p.noFill();
      this.p.ellipse(this.x, this.y, this.ellipseX, this.ellipseY);

      this.ellipseY += this.speed * 0.15;
      this.ellipseX += this.speed * 0.5;

      if (this.ellipseY > 50) {
        this.init();
      }
    }
  }
}

