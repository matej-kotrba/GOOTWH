class Bludiste {
    constructor(x, y, w, h, hybat) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.startX = x
        this.pohyb = hybat
        this.index = 0
        this.image = new Image()
        this.image.src = "zed.png"
        this.type = "platforma"
        if (this.pohyb == true) {
            this.index = packaPlatforma
            packaPlatforma++
        }

    }

    vykresleni() {
        //var pat = c.createPattern(this.image, 'repeat')
        //c.fillStyle = pat
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
        //c.fillStyle = "rgb(143, 143, 143)"
        //c.fillRect(this.x, this.y, this.w, this.h)
    }

    kolize() {

        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            if (hrac.x + hrac.w <= this.x + 10/* && Math.abs((this.y + this.h / 2) - (hrac.y + hrac.h / 2)) < this.h / 2 - 3*/) {
                hrac.x = this.x - hrac.w - 1
            }
            else if (hrac.x >= this.x + this.w - 10/* && Math.abs((this.y + this.h / 2) - (hrac.y + hrac.h / 2)) < this.h / 2 - 3*/) {
                hrac.x = this.x + this.w + 1
            }
            else if (hrac.y + hrac.h <= this.y + 10) {
                hrac.y = this.y - hrac.h - 1
            }
            else if (hrac.y >= this.y + this.h - 10) {
                hrac.y = this.y + this.h + 1
            }
        }

    }

}

class Dvere {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "dvere.png"
        this.imageotocene = new Image()
        this.imageotocene.src = "dvereotocene.png"
        this.otevreno = false
        this.cas = 0
        this.type = "dvere"
    }

    vykresleni() {


        if (this.otevreno == 1) {
            c.drawImage(this.imageotocene, this.x, this.y, this.w, this.h)
        }

        else {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
    }

    kolize() {
        if (this.cas > 0) {
            this.cas -= dt
        }
        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + this.w + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + this.h + 20) {
            c.fillStyle = "rgb(68, 68, 68)"
            c.fillRect(hrac.x + 5, hrac.y - 50, hrac.w - 10, 30)
            c.fillStyle = "white"
            c.font = "20px Arial"
            c.fillText("E", hrac.x + hrac.w / 2 - 7.5, hrac.y - 27.5)
            hrac.tabulka = false
        }

        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + this.w + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + this.h + 20 && hrac.ee
            && this.cas <= 0) {
            if (this.otevreno == false) {
                this.otevreno = true
                this.cas = 60
            }

            else if (this.otevreno == true && hrac.x >= this.x + this.w || hrac.x + hrac.w <= this.x || hrac.y + hrac.h <= this.y || hrac.y >= this.y + this.h) {
                this.otevreno = false
                this.cas = 60
            }
        }

        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h && this.otevreno == false) {
            if (hrac.x + hrac.w <= this.x + 10) {
                hrac.x = this.x - hrac.w
            }
            else if (hrac.x >= this.x + this.w - 10) {
                hrac.x = this.x + this.w
            }
            else if (hrac.y + hrac.h <= this.y + 10) {
                hrac.y = this.y - hrac.h
            }
            else if (hrac.y >= this.y + this.h - 10) {
                hrac.y = this.y + this.h
            }
        }
    }
}

class Cil {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.r = 0
        this.r1 = 1
        this.r2 = 2
        this.r3 = 3
        this.r4 = 4
        this.expand = 0
        this.intervali = 100
        this.max = 5
        this.type = "portal"
        this.image = new Image()
        this.image.src = "cil.png"
    }

    vykresleni() {
        if (waifus.length == 0) {

            c.fillStyle = "black"
            c.beginPath();
            c.arc(this.x, this.y, 4 * 3 * this.max + 1, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            c.globalAlpha = 0.4
            c.fillStyle = "purple"
            c.beginPath();
            c.arc(this.x, this.y, 4 * 3 * this.max, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            c.fillStyle = "purple"
            c.beginPath();
            c.arc(this.x, this.y, 4 * 3 * this.r, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            c.beginPath();
            c.arc(this.x, this.y, 4 * 3 * this.r1, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            c.beginPath();
            c.arc(this.x, this.y, 4 * 3 * this.r2, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            c.beginPath();
            c.arc(this.x, this.y, 4 * 3 * this.r3, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            c.beginPath();
            c.arc(this.x, this.y, 4 * 3 * this.r4, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            //c.globalAlpha -= 0.1
            this.r += 0.05
            this.r1 += 0.05
            this.r2 += 0.05
            this.r3 += 0.05
            this.r4 += 0.05
            if (this.r >= this.max) {
                this.r = 0
            }
            if (this.r1 >= this.max) {
                this.r1 = 0
            }
            if (this.r2 >= this.max) {
                this.r2 = 0
            }
            if (this.r3 >= this.max) {
                this.r3 = 0
            }
            if (this.r4 >= this.max) {
                this.r4 = 0
            }

        }
        c.globalAlpha = 1

        c.drawImage(this.image, this.x - 115, this.y - 140, 250, 200)
        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + 200 + 20 && waifus.length == 0) {
            c.fillStyle = "rgb(68, 68, 68)"
            c.fillRect(hrac.x + 5, hrac.y - 50, hrac.w - 10, 30)
            c.fillStyle = "white"
            c.font = "20px Arial"
            c.fillText("E", hrac.x + hrac.w / 2 - 7.5, hrac.y - 27.5)
            hrac.tabulka = false
        }
        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + 250 + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + 200 + 20 && waifus.length == 0
            && hrac.ee) {
            skore = skore + (Math.round(10 * (levelTime / 60))) / 10
            huraFamfaraVyhralJsi = true
            if (levelsCompleted == lokaceLevely) {
                levelsCompleted++
            }
        }
    }

    kolize() {

    }
}

class Scroll {
    constructor(x, y, text) {
        this.x = x
        this.y = y
        this.w = 75
        this.h = 75
        this.text = text
        this.showScroll = false
        this.type = "scroll"
        this.image = new Image()
        this.image.src = "scroll.png"
        this.scrolly = new Image()
        this.scrolly.src = text
    }

    vykresleni() {

        c.drawImage(this.image, this.x, this.y, this.w, this.h)
        for (var v = 0; v < 10; v++) {
            c.fillStyle = "whitesmoke"
            c.globalAlpha = 0.08
            c.beginPath();
            c.arc(this.x + this.w / 2, this.y + this.h / 2, 4 * v, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();

        }
        c.globalAlpha = 1
    }

    kolize() {
        if (hrac.x + hrac.w >= this.x + this.w / 2 - 50 && hrac.x <= this.x + this.w / 2 + 50 && hrac.y + hrac.h >= this.y + this.h / 2 - 50 && hrac.y <=
            this.y + this.h / 2 + 50) {
            c.fillStyle = "rgb(68, 68, 68)"
            c.fillRect(hrac.x + 5, hrac.y - 50, hrac.w - 10, 30)
            c.fillStyle = "white"
            c.font = "20px Arial"
            c.fillText("E", hrac.x + hrac.w / 2 - 7.5, hrac.y - 27.5)
            hrac.tabulka = false
        }

        if (hrac.x + hrac.w >= this.x + this.w / 2 - 50 && hrac.x <= this.x + this.w / 2 + 50 && hrac.y + hrac.h >= this.y + this.h / 2 - 50 && hrac.y <=
            this.y + this.h / 2 + 50 && hrac.ee) {
            this.showScroll = true
        }
        if (this.showScroll) {
            if (this.text == "sutrinfo.png") {
                c.drawImage(this.scrolly, canvas.width / 2 - 300, canvas.height / 2 - 400, 600, 800)
            }
            if (hrac.enter) {
                this.showScroll = false
            }
        }
    }
}

class Teleport {
    constructor(x1, y1, x2, y2) {
        this.x = x1
        this.y = y1
        this.w = 90
        this.h = 120
        this.x2 = x2
        this.y2 = y2
        this.cas = 0
        this.index = teleportPoradi
        teleportPoradi++
        this.cooldown = false
        this.barva = { barva1: Math.random() * 255, barva2: Math.random() * 255, barva3: Math.random() * 255 }
        this.images = []
        for (var h = 0; h < 7; h++) {
            this.images.push(new Image())
            this.images[h].src = "./portalPlatforma/portal" + h + ".png"
        }
    }

    vykresleni() {
        this.cas += dt
        if (this.cas >= 6) {
            this.index++
            this.cas = 0
            if (this.index >= this.images.length - 1) {
                this.index = 0
            }
        }
        c.drawImage(this.images[this.index], this.x, this.y, this.w, this.h)

        c.drawImage(this.images[this.index], this.x2, this.y2, this.w, this.h)

        c.fillStyle = "rgb(" + this.barva.barva1 + "," + this.barva.barva2 + "," + this.barva.barva3 + ")"
        c.fillRect(this.x + this.w / 2 - 30, this.y + 10, 30, 5)
        c.fillRect(this.x2 + this.w / 2 - 30, this.y2 + 10, 30, 5)
    }

    kolize() {

        if (hrac.x + hrac.w >= this.x + 20 && hrac.x <= this.x + this.w - 45 && hrac.y + hrac.h >= this.y + 30 && hrac.y <= this.y + this.h && this.cooldown == false) {
            hrac.x = this.x2 + this.w / 2 - hrac.w / 2
            hrac.y = this.y2 + this.h / 2 - hrac.w / 2
            this.cooldown = true
        }

        else if (hrac.x + hrac.w >= this.x2 + 20 && hrac.x <= this.x2 + this.w - 45 && hrac.y + hrac.h >= this.y2 + 30 && hrac.y <= this.y2 + this.h && this.cooldown == false) {
            hrac.x = this.x + this.w / 2 - hrac.w / 2
            hrac.y = this.y + this.h / 2 - hrac.w / 2
            this.cooldown = true
        }

        else if (!(hrac.x + hrac.w >= this.x + 20 && hrac.x <= this.x + this.w - 45 && hrac.y + hrac.h >= this.y + 30 && hrac.y <= this.y + this.h) && !(
            hrac.x + hrac.w >= this.x2 + 20 && hrac.x <= this.x2 + this.w - 45 && hrac.y + hrac.h >= this.y2 + 30 && hrac.y <= this.y2 + this.h
        )) {
            this.cooldown = false
        }
    }
}

class Packa {
    constructor(x, y, vzdalenost) {
        this.x = x
        this.y = y
        this.w = 25
        this.h = 40
        this.startX = x
        this.type = "paka"
        this.locked = true
        this.cas = 0
        this.index = packaPocet
        packaPocet++
        this.vzdalenost = vzdalenost
        this.image = new Image()
        this.image.src = "packa.png"
        this.imageOtoceny = new Image()
        this.imageOtoceny.src = "packa-otocena.png"
    }

    vykresleni() {
        if (this.locked) {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
        else {
            c.drawImage(this.imageOtoceny, this.x, this.y, this.w, this.h)
        }
    }

    kolize() {
        if (this.cas > 0) {
            this.cas -= dt
            if (this.cas < 0) {
                this.cas = 0
            }
        }
        if (hrac.x + hrac.w >= this.x - 2 && hrac.x <= this.x + this.w + 2 && hrac.y + hrac.h >= this.y - 2 && hrac.y <= this.y + this.h + 2) {
            c.fillStyle = "rgb(68, 68, 68)"
            c.fillRect(hrac.x + 5, hrac.y - 50, hrac.w - 10, 30)
            c.fillStyle = "white"
            c.font = "20px Arial"
            c.fillText("E", hrac.x + hrac.w / 2 - 7.5, hrac.y - 27.5)
            hrac.tabulka = false
        }

        if (hrac.x + hrac.w >= this.x - 2 && hrac.x <= this.x + this.w + 2 && hrac.y + hrac.h >= this.y - 2 && hrac.y <= this.y + this.h + 2 && this.locked == true && hrac.ee && this.cas <= 0) {
            this.locked = false
            this.cas = 10
        }

        if (hrac.x + hrac.w >= this.x - 2 && hrac.x <= this.x + this.w + 2 && hrac.y + hrac.h >= this.y - 2 && hrac.y <= this.y + this.h + 2 && this.locked == false && hrac.ee && this.cas <= 0) {
            this.locked = true
            this.cas = 10
        }

        for (var abc in platformy) {
            if (vzdalenost(platformy[abc].x, platformy[abc].y, platformy[abc].startX + this.vzdalenost, platformy[abc].y) > 5 && !(this.locked)) {

                if (platformy[abc].pohyb == true && platformy[abc].index == this.index) {
                    platformy[abc].x += 3
                    
                }
            }

            if (vzdalenost(platformy[abc].x, platformy[abc].y, platformy[abc].startX, platformy[abc].y) > 5 && this.locked) {
                if (platformy[abc].pohyb == true && platformy[abc].index == this.index) {
                    platformy[abc].x -= 3
                }
            }
        }
    }
}