class BombaHozena {
    constructor(x, y, sx, sy) {
        this.x = x
        this.y = y
        this.w = 30
        this.h = 30
        this.image = new Image()
        this.image.src = "bomba.png"
        this.sx = sx
        this.sy = sy
        this.rychlost = 7
        this.obrazek = new Image()
        this.obrazek.src = "vybuch.png"
        this.type = "bomba"
        this.explodeTime = 16
        this.expand = 0.3
        this.hit = false
        if (this.sx != 0 && this.sy != 0) {
            this.sx = sx / 1.2
            this.sy = sy / 1.2
        }
    }

    vykresleni() {
        if (this.expand <= 0.3) {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
    }

    pohyb() {
        this.rychlost *= 0.99
        this.x += this.sx * this.rychlost * dt
        this.y += this.sy * this.rychlost * dt

        if (this.rychlost < 2) {
            this.vybuch()
            /*for (var i = 0; i < this.explodeTime; i++) {
                c.fillStyle = 'orange';
                c.beginPath();
                c.arc(this.x + this.w / 2, this.y + this.h / 2, i * 3, 0, 2 * Math.PI);
                c.fill();
                c.stroke();
                c.restore();
            }*/
            //c.drawImage(this.obrazek, this.x + this.w / 2 - 40, this.y + this.h / 2 - 40, 80, 80)
            //projektily.splice(projektily.indexOf(this), 1)
        }

        for (var i in platformy) {
            if (this.x <= platformy[i].x + platformy[i].w && this.x + this.w >= platformy[i].x && this.y <= platformy[i].y + platformy[i].h
                && this.y + this.h >= platformy[i].y) {
                if (platformy[i].type == "dvere" && platformy[i].otevreno) { }
                else {
                    this.vybuch()
                }

                //c.drawImage(this.obrazek, this.x - this.w, this.y - this.h, 80, 80)
                //projektily.splice(projektily.indexOf(this), 1)
            }

        }
        for (var k in waifus) {
            if (this.x <= waifus[k].x + waifus[k].w && this.x + this.w >= waifus[k].x && this.y <= waifus[k].y + waifus[k].h
                && this.y + this.h >= waifus[k].y) {
                this.vybuch()
                if (waifus[k].type == "diceBoss" && this.hit == false || waifus[k].type == "KlobasaBoss" && this.hit == false) {
                    this.hit = true
                    console.log(waifus[k].zivoty)
                    waifus[k].zivoty--
                }
                //c.drawImage(this.obrazek, this.x - this.w, this.y - this.h, 80, 80)
                //projektily.splice(projektily.indexOf(this), 1)
                else if (waifus[k].type != "diceBoss" && waifus[k].type != "KlobasaBoss") {
                    waifus[k].status = "dead"
                }

            }
        }
    }

    vybuch() {
        this.sx = 0
        this.sy = 0
        this.rychlost = 0
        this.expand += 0.03 * dt
        if (this.expand / 1.5 > 1) {
            projektily.splice(projektily.indexOf(this), 1)
            animace.push(new Plamen(this.x - 25, this.y - 25, 50, 50, 300))
        }
        for (var u = this.explodeTime; u > 0; u--) {

            if (u > 10) {
                c.fillStyle = 'red';
                c.globalAlpha = 1 - this.expand / 3

            }
            else if (u > 5 && u < 11) {
                c.fillStyle = 'orange'
                c.globalAlpha = 1 - this.expand / 3
            }

            else if (u > 0 && u < 6) {
                c.fillStyle = 'yellow'
                c.globalAlpha = 1 - this.expand / 3
            }
            c.beginPath();
            c.arc(this.x + this.w / 2, this.y + this.h / 2, u * 3 * this.expand, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
            c.globalAlpha = 1
        }
    }
}

class MecPouzity {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 120
        this.h = 35
        this.cas = 0
        this.s = 8
        this.type = "mec"
        this.mecKonec = false
        this.image = new Image()
        this.image.src = "mec.png"
        this.imageOtoceny = new Image()
        this.imageOtoceny.src = "mecotoceny.png"
    }

    vykresleni() {
        if (inventar.inventory[inventar.vyber] == "mec" && !hrac.otocenoMec) {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
        else if (inventar.inventory[inventar.vyber] == "mec" && hrac.otocenoMec) {
            c.drawImage(this.imageOtoceny, this.x, this.y, this.w, this.h)
        }
    }

    pohyb() {

        hrac.mecPohyb = true

        for (var c in waifus) {
            if (this.x <= waifus[c].x + waifus[c].w && this.x + this.w >= waifus[c].x && this.y <= waifus[c].y + waifus[c].h && this.y + this.h >= waifus[c].y) {
                if (waifus[c].type == "sutr") {
                    inventar.inventory[inventar.vyber] = null
                }
                waifus[c].status = "dead"
            }


        }

        if (this.s < 2 && this.mecKonec == false) {
            this.s = 0
            this.mecKonec = true
        }

        if (this.mecKonec == true && this.s == 0) {
            this.s = 8
        }

        if (this.s < 2 && this.mecKonec == true) {
            this.s = 0
        }



        if (!hrac.otocenoMec && this.mecKonec == false) {
            this.s *= 0.8
            this.x += this.s * dt
        }
        if (hrac.otocenoMec && this.mecKonec == false) {
            this.s *= 0.8
            this.x -= this.s * dt
        }

        if (!hrac.otocenoMec && this.mecKonec == true) {
            this.s *= 0.8
            this.x -= this.s * dt
            if (this.s <= 0) {
                hrac.mecPohyb = false
                projektily.splice(projektily.indexOf(this), 1)
            }
        }
        if (hrac.otocenoMec && this.mecKonec == true) {
            this.s *= 0.8
            this.x += this.s * dt
            if (this.s <= 0) {
                hrac.mecPohyb = false
                projektily.splice(projektily.indexOf(this), 1)
            }
        }


    }

    vybuch() {

    }
}

class Klobasa {
    constructor(x, y, w, h, lokacex, lokacey, s, pravda) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.type = "klobasa"
        this.lokaceX = lokacex
        this.lokaceY = lokacey
        this.sx = 0
        this.sy = 0
        this.s = s
        this.vlna = pravda
        this.image = new Image()
        this.image.src = "klobasa.png"
        this.sx = xxs(this.x, this.y, this.lokaceX, this.lokaceY)
        this.sy = yys(this.x, this.y, this.lokaceX, this.lokaceY)
    }

    vykresleni() {
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    pohyb() {

        if (!this.vlna) {
            this.x += this.sx * this.s * dt
            this.y += this.sy * this.s * dt
        }

        if (this.vlna) {
                //this.s *= 0.99
                if (this.s < 0.5) {
                    this.s = 0
                }
                this.x += this.sx * this.s * dt
                this.y += this.sy * this.s * dt
            
        }
        
        this.vybuch()

        if (hrac.x + hrac.w >= this.x && hrac.x <= this.x + this.w && hrac.y + hrac.h >= this.y + 10 && hrac.y <= this.y + this.h - 10) {
            hrac.zivot[0] = "dead"
        }
    }

    vybuch() {
        if (this.x > canvas.width || this.x + this.w < 0 || this.y > canvas.height || this.y + this.h < 0) {
            projektily.splice(projektily.indexOf(this), 1)
        }
    }
}