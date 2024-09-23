function heatSketch(p) {
    let sDot
    let m;
    let c0;

    p.setup = function () {
        sDot = slide.pA2
        bgScene = p.createCanvas(p.windowWidth, p.windowHeight);
        bgScene.id("heat");
        p.background(0,0)
        p.noStroke();
        p.newPattern();
    }

    p.draw = function () {
        p.newColor();
        p.drawPattern();
    }

    p.newColor = function () {
        sDot = slide.pA2
        c0 = p.color(slide.secondary1)
        c0.setAlpha(slide.pB2)
    }

    p.newPattern = function () {
        m = [];
        for (let x = 0; x < p.width / sDot; x++) {
            m[x] = [];
            for (let y = 0; y < p.height / sDot; y++) {
                m[x][y] = p.int(p.random(2));
            }
        }
    }

    p.drawPattern = function () {
        for (let x = 0; x < p.width; x += sDot) {
            for (let y = 0; y < p.height; y += sDot) {
                if (m[p.floor(x / sDot)][p.floor(y / sDot)] === 0) {
                    p.fill(c0);
                } else {
                    p.clear();
                }
            }
        }

        for (let x = 0; x < p.width + 1; x += sDot) {
            for (let y = 0; y < p.height + 1; y += sDot) {
                let s = 0;
                if ((x + y) % 10 === 0) {
                    p.fill(c0);
                    s = -1;
                } else {
                    p.clear();
                    s = 1;
                }
                let d = p.map(
                    0.5 * p.sin(8 * p.PI * p.noise(x / 1220, y / 1220, p.frameCount / 500)) * p.sin(8 * p.PI * p.noise(x / 1220, y / 1220, p.frameCount / 500)),
                    1,
                    0.5,
                    -sDot / 2,
                    sDot / 2
                );
                p.ellipse(x, y, sDot + s * d, sDot + s * d);
            }
        }
    }
}

