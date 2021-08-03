class Bludiste {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.type = "platforma"
    }

    vykresleni() {
        c.fillStyle = "rgb(143, 143, 143)"
        c.fillRect(this.x, this.y, this.w, this.h)
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
            this.cas--
        }
        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + this.w + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + this.h + 20) {
            c.fillStyle = "rgb(27, 27, 27)"
            c.fillRect(hrac.x + 5, hrac.y - 50, hrac.w - 10, 30)
            c.fillStyle = "white"
            c.font = "20px Arial"
            c.fillText("E", hrac.x + hrac.w / 2 - 7.5, hrac.y - 27.5)
            hrac.tabulka = false
        }

        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + this.w + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + this.h + 20 && hrac.ee
            && this.cas == 0) {
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
            c.globalAlpha -= 0.1
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
        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + 250 + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + 200 + 20 && waifus.length == 0) {
            c.fillStyle = "rgb(27, 27, 27)"
            c.fillRect(hrac.x + 5, hrac.y - 50, hrac.w - 10, 30)
            c.fillStyle = "white"
            c.font = "20px Arial"
            c.fillText("E", hrac.x + hrac.w / 2 - 7.5, hrac.y - 27.5)
            hrac.tabulka = false
        }
        if (hrac.x + hrac.w >= this.x - 20 && hrac.x <= this.x + 250 + 20 && hrac.y + hrac.h >= this.y - 20 && hrac.y <= this.y + 200 + 20 && waifus.length == 0
            && hrac.ee) {
            huraFamfaraVyhralJsi = true
            levelsCompleted++
        }
    }

    kolize() {

    }
}