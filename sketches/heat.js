function heatSketch(p) {
    let sTile
    let m;
    let c0, c1;
    let pause = false;

    p.setup = function() {
        sTile = slide.pA2
        bgScene = p.createCanvas(p.windowWidth, p.windowHeight);
        bgScene.id("heat");
        p.noStroke();
        p.newPattern();
    }

    p.draw = function() {
        p.newColor();
        p.drawPattern();
    }

    p.newColor = function() {
        sTile = slide.pA2
        c0 = p.color(slide.secondary1)
        c0.setAlpha(slide.pB2)
    }

    p.newPattern = function() {
        m = [];
        for (let x = 0; x < p.width / sTile; x++) {
            m[x] = [];
            for (let y = 0; y < p.height / sTile; y++) {
                m[x][y] = p.int(p.random(2));
            }
        }
    }

    p.drawPattern = function() {
        for (let x = 0; x < p.width; x += sTile) {
            for (let y = 0; y < p.height; y += sTile) {
                if (m[p.floor(x / sTile)][p.floor(y / sTile)] === 0) {
                    p.fill(c0);
                } else {
                    p.clear();
                }
                p.rect(x, y, sTile, sTile);
            }
        }

        for (let x = 0; x < p.width + 1; x += sTile) {
            for (let y = 0; y < p.height + 1; y += sTile) {
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
                    -sTile / 2,
                    sTile / 2
                );
                p.ellipse(x, y, sTile + s * d, sTile + s * d);
            }
        }
    }
}
