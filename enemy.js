class Waifu {
    constructor(x, y, w, h, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "waifu1.png"
        this.body = [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, { x: x4, y: y4 }, { x: x5, y: y5 }]
        this.lokace = 0
        this.xs = 0
        this.ys = 0
        this.s = 5
        this.status = "alive"
        this.pohyb()
        this.type = "zralok"

    }

    vykresleni() {
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    pohyb() {
        /* if (this.lokace > this.body.length) {
             this.kotrola *= -1
             console.log(this.kontrola)
             
         }*/
        // console.log(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y + ' pohyb')

        if (this.lokace == this.body.length - 1) {
            this.lokace = -1
        }
        if (this.lokace < this.body.length - 1) {
            this.lokace += 1
            this.xs = xxs(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y)
            this.ys = yys(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y)
        }


        //console.log(vzdalenost(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y))


    }

    pohnuti() {
        if (vzdalenost(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y) < this.s * 1.1 * dt2) {
            this.pohyb()
        }
        this.x += this.xs * this.s * dt
        this.y += this.ys * this.s * dt

        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }
    }

    smrt() {
        if (this.status == "dead") {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}

class Dice {
    constructor(x, y, w, h, x1, y1, x2, y2, x3, y3, x4, y4) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "4dice.png"
        this.body = [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, { x: x4, y: y4 }]
        this.lokace = 0
        this.xs = 0
        this.ys = 0
        this.s = 2
        this.status = "alive"
        this.pohyb()
        this.type = "kostka"
    }

    vykresleni() {
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    pohyb() {
        /* if (this.lokace > this.body.length) {
             this.kotrola *= -1
             console.log(this.kontrola)
             
         }*/
        // console.log(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y + ' pohyb')

        if (this.lokace == this.body.length - 1) {
            this.lokace = -1
        }
        if (this.lokace < this.body.length - 1) {
            this.lokace += 1
            this.xs = xxs(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y)
            this.ys = yys(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y)
        }


        //console.log(vzdalenost(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y))


    }

    pohnuti() {
        if (vzdalenost(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y) < this.s * 1.1 * dt2) {
            this.pohyb()
        }
        this.x += this.xs * this.s * dt
        this.y += this.ys * this.s * dt

        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }
    }

    smrt() {
        if (this.status == "dead") {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}

class Port {
    constructor(x, y, w, h, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "wifus2.png"
        this.body = [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, { x: x4, y: y4 }, { x: x5, y: y5 }]
        this.lokace = 0
        this.status = "alive"
        this.cas = 0
        this.pohyb()
        this.type = "teleport"
    }

    vykresleni() {
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    pohyb() {
        if (this.lokace == this.body.length - 1 && this.cas <= 0) {
            this.lokace = -1

        }
        if (this.lokace < this.body.length - 1 && this.cas <= 0) {
            this.lokace += 1
            this.x = this.body[this.lokace].x
            this.y = this.body[this.lokace].y
            this.cas = 90
        }

    }

    pohnuti() {
        this.cas -= dt
        if (this.cas <= 0) {
            this.pohyb()
        }
        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }
    }

    smrt() {
        if (this.status == "dead") {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}

class DiceBoss {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 250
        this.h = 250
        this.xs = 0
        this.ys = 0
        this.s = 5
        this.cas = 0
        this.type = "diceBoss"
        this.status = "alive"
        this.zivoty = 5
        this.image = new Image()
        this.image.src = "4dice.png"
    }

    vykresleni() {
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    pohnuti() {
        if (!dialog) {
        this.xs = xxs(this.x, this.y, hrac.x, hrac.y)
        this.ys = yys(this.x, this.y, hrac.x, hrac.y)
        /*if (dt > 1) {
            dt = 1
        }*/
        this.s *= 0.9951
        if (this.s < 1 && this.cas <= 0) {
            this.s = 0
            this.cas = 120
        }
        if (this.cas > 0) {
            this.cas -= dt
            if (this.cas <= 0) {
                this.s = 5
            }
        }
        if (this.cas <= 0) {
            this.x += this.xs * this.s * dt
            this.y += this.ys * this.s * dt
        }
        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }
    }
}

    pohyb() {

    }

    smrt() {
        if (this.zivoty == 0) {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}

class Sutr {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 75
        this.h = 75
        this.xs = 0
        this.ys = 0
        this.s = 5
        this.type = "sutr"
        this.status = "alive"
        this.BlizkoHraci = false
        this.image = new Image()
        this.image.src = "sutr-sleep.png"
        this.imageInvoked = new Image()
        this.imageInvoked.src = "sutr.png"
    }

    vykresleni() {
        if (hrac.x + hrac.w >= this.x - 200 && hrac.x <= this.x + this.w + 200 && hrac.y + hrac.h >= this.y - 200 && hrac.y <= this.y + this.h + 200) {
            this.BlizkoHraci = true
            c.drawImage(this.imageInvoked, this.x, this.y, this.w, this.h)
        }
        else {
            this.BlizkoHraci = false
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
    }

    pohnuti() {
        this.xs = xxs(this.x, this.y, hrac.x, hrac.y)
        this.ys = yys(this.x, this.y, hrac.x, hrac.y)
        if (this.BlizkoHraci) {
            this.x += this.xs * this.s * dt
            this.y += this.ys * this.s * dt
        }

        if (hrac.x + hrac.w >= this.x && hrac.x <= this.x + this.w && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }
    }

    pohyb() {

    }

    smrt() {
        if (this.status == "dead") {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}


class Summonings {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 50
        this.h = 50
        this.s = 2
        this.xs = 0
        this.ys = 0
        this.status = "alive"
        this.image = new Image()
        this.image.src = "summoning.png"
    }

    vykresleni() {
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    pohnuti() {
        this.xs = xxs(this.x, this.y, hrac.x, hrac.y)
        this.ys = yys(this.x, this.y, hrac.x, hrac.y)
        this.x += this.xs * dt
        this.y += this.ys * dt

        if (hrac.x + hrac.w >= this.x && hrac.x <= this.x + this.w && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }
    }
    pohyb() {

    }
    smrt() {
        if (this.status == "dead") {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}


class Summoner {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 150
        this.h = 150
        this.cas = 0
        this.summons = 0
        this.status = "alive"
        this.image = new Image()
        this.image.src = "summoner.png"
        this.imageOtoceny = new Image()
        this.imageOtoceny.src = "summoner-otoceny.png"
    }

    vykresleni() {
        if (hrac.x + hrac.w >= this.x + this.w / 2) {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
        else {
            c.drawImage(this.imageOtoceny, this.x, this.y, this.w, this.h)
        }
    }

    pohnuti() {
        if (this.summons < 5) {
            this.cas += dt
        }

        if (this.cas % 240 < dt && this.summons <= 4) {
            this.cas = 0
            var lokacePortalx = Math.random() * 1200 + 100
            var lokacePortaly = Math.random() * 800 + 100
            tlacitka.push(new Portal(lokacePortalx - 75, lokacePortaly - 75, 60))
            waifus.push(new Summonings(lokacePortalx, lokacePortaly))
            this.summons++
        }

        if (hrac.x + hrac.w >= this.x && hrac.x <= this.x + this.w && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }
    }

    pohyb() {

    }

    smrt() {
        if (this.status == "dead") {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}

class DiceBossParek {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 250
        this.h = 250
        this.image = new Image()
        this.image.src = "4diceBoss.png"
        this.imageOtoceny = new Image()
        this.imageOtoceny.src = "4diceBoss-otoceny.png"
        this.type = "KlobasaBoss"
        this.zivoty = 10
        this.body = [{ x: 100, y: 100 }, { x: 100, y: 600 }, { x: 400, y: 100 }, { x: 400, y: 600 }, { x: 700, y: 100 }, { x: 700, y: 600 }, { x: 1000, y: 100 }, { x: 1000, y: 600 }]
        this.lokace = 0
        this.xs = 0
        this.ys = 0
        this.s = 9
        this.cas = 0
        this.expand = 0
        this.klobasy = []
        this.r = 0
        this.bodyVzdalenost = { vzdalenost: 10000, index: 0 }
        this.forma = false
        this.formaCas = 0
        this.formaAkce = false
        this.bombaPocet = 0
        this.klobasaPravda = false
        this.pohyb()
    }

    vykresleni() {
        if (this.cas - 10 > 0) {
            this.expand += 0.35 * dt
            for (var b = 0; b < 10; b++) {
                c.fillStyle = "red"
                c.globalAlpha = 0.3
                c.beginPath();
                c.arc(this.x + this.w / 2, this.y + this.h / 2, b * 1 * this.expand, 0, 2 * Math.PI);
                c.fill();
                c.stroke();
                c.restore();

                /*if (hrac.x + hrac.w + b * this.expand >= this.x + this.w / 2 && hrac.x - b * this.expand <= this.x + this.w / 2
                    && hrac.y + hrac.h + b * this.expand >= this.y + this.h / 2
                    && hrac.y - b * this.expand <= this.y + this.h / 2) {
                    if (hrac.x + hrac.w <= this.x + this.w / 2 - 35 && hrac.y >= this.y + this.h / 2 + 35) {
                        //this.r = Math.sqrt((b * this.expand) * (b * this.expand)) + Math.sqrt((this.y + this.h / 2) * (this.y + this.h / 2))
                        if (vzdalenost(hrac.x + hrac.w / 2, hrac.y + hrac.h / 2, this.x + this.w / 2, this.y + this.h / 2) < b * this.expand + 35) {
                            hrac.zivot[0] = "dead"
                        }
                    }
                    if (hrac.x >= this.x + this.w / 2 + 35 && hrac.y >= this.y + this.h / 2 + 35) {
                        if (vzdalenost(hrac.x + hrac.w / 2, hrac.y + hrac.h / 2, this.x + this.w / 2, this.y + this.h / 2) < b * this.expand + 35) {
                            hrac.zivot[0] = "dead"
                        }
                    }

                    if (hrac.x >= this.x + this.w / 2 + 35 && hrac.y + hrac.h <= this.y + this.h / 2 - 35) {
                        if (vzdalenost(hrac.x + hrac.w / 2, hrac.y + hrac.h / 2, this.x + this.w / 2, this.y + this.h / 2) < b * this.expand + 35) {
                            hrac.zivot[0] = "dead"
                        }
                    }

                    if (hrac.x + hrac.w <= this.x + this.w / 2 - 35 && hrac.y + hrac.h <= this.y + this.h / 2 - 35) {
                        if (vzdalenost(hrac.x + hrac.w / 2, hrac.y + hrac.h / 2, this.x + this.w / 2, this.y + this.h / 2) < b * this.expand + 35) {
                            hrac.zivot[0] = "dead"
                        }
                    }

                    else {
                        //hrac.zivot[0] = "dead"
                    }
                }*/
            }



            if (vzdalenost(this.x + this.w / 2, this.y + this.h / 2, hrac.x, hrac.y) < 10 * this.expand - 25) {
                hrac.zivot[0] = "dead"
            }
            else if (vzdalenost(this.x + this.w / 2, this.y + this.h / 2, hrac.x + hrac.w, hrac.y) < 10 * this.expand - 25) {
                hrac.zivot[0] = "dead"
            }
            else if (vzdalenost(this.x + this.w / 2, this.y + this.h / 2, hrac.x, hrac.y + hrac.h) < 10 * this.expand - 25) {
                hrac.zivot[0] = "dead"
            }
            else if (vzdalenost(this.x + this.w / 2, this.y + this.h / 2, hrac.x + hrac.w, hrac.y + hrac.h) < 10 * this.expand - 25) {
                hrac.zivot[0] = "dead"
            }
            else if (this.x + this.w / 2 - (10 * this.expand) <= hrac.x + hrac.w - 25 && this.x + this.w / 2 + (10 * this.expand) >= hrac.x + 25 &&
                this.y + this.h >= hrac.y + 25 && this.y <= hrac.y + hrac.h - 25) {
                hrac.zivot[0] = "dead"
            }
            else if (this.y + this.h / 2 - (10 * this.expand) <= hrac.y + hrac.h - 25 && this.y + this.h / 2 + (10 * this.expand) >= hrac.y + 25 &&
                this.x + this.w >= hrac.x + 25 && this.x <= hrac.x + hrac.w - 25) {
                hrac.zivot[0] = "dead"
            }

            /*if (vzdalenost(this.x + this.w / 2, this.y + this.h / 2, hrac.x + hrac.w / 2, hrac.y + hrac.h / 2) < 10 * this.expand + (hrac.w / 2 + hrac.h / 2) / 2 - 15) {
                hrac.zivot[0] = "dead"
            } */

            c.globalAlpha = 1

        }
        else {
            c.globalAlpha = 1
            this.expand = 0
        }

        if (this.zivoty > 0) {
            c.fillStyle = "black"
            c.fillRect(canvas.width / 2 - 201, 48, 402, 54)
            c.fillStyle = "limegreen"
            c.fillRect(canvas.width / 2 - 199, 50, 39.8 * this.zivoty, 50)

        }

        if (this.x + this.w / 2 < hrac.x + hrac.w) {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }

        else {
            c.drawImage(this.imageOtoceny, this.x, this.y, this.w, this.h)
        }

        /*c.fillStyle = "yellow"
        for (var n = 0; n < this.body.length; n++) {
            c.fillRect(this.body[n].x, this.body[n].y, 50, 50)
        }*/
    }

    pohyb() {
        //console.log('asdsd')
        for (var u = 0; u < this.body.length; u++) {
            var vzdalenostTed = vzdalenost(this.body[u].x, this.body[u].y, hrac.x, hrac.y)
            if (vzdalenostTed < this.bodyVzdalenost.vzdalenost) {
                this.bodyVzdalenost.vzdalenost = vzdalenostTed
                this.bodyVzdalenost.index = u
            }
        }

    }

    pohnuti() {
        if (!dialog) {
        if (this.formaCas >= 8) {
            this.forma = true
            this.formaCas = 0
        }

        if (this.cas > 0) {
            this.cas -= dt
        }

        if (this.forma) {
            this.xs = xxs(this.x, this.y, 1100, canvas.height / 2)
            this.ys = yys(this.x, this.y, 1100, canvas.height / 2)
        }

        if (vzdalenost(this.x, this.y, 1100, canvas.height / 2) >= 5 && this.forma) {
            this.x += this.xs * this.s * dt
            this.y += this.ys * this.s * dt
            if (vzdalenost(this.x, this.y, 1100, canvas.height / 2) < 5) {
                this.formaAkce = true
                for (var h = 0; h < 25; h++) {
                    var klobasaS = Math.random() * 8 + 3
                    projektily.push(new Klobasa(1100, h * 40, 100, 35, 0, h * 40, klobasaS, true))
                }
            }

        }
        if (this.formaAkce) {
        for (var m in projektily) {
            if (projektily[m].type == "klobasa" && this.formaAkce && projektily.length != 0) {
                this.klobasaPravda = true
            }
        }   

            if (projektily.length == 0) {
                this.klobasaPravda = false
            }

            if (!this.klobasaPravda) {
            this.formaAkce = false
            this.forma = false
            this.formaCas = 0
            }
            else {
                this.klobasaPravda = false
            }
    }


        if (!this.forma) {
            this.xs = xxs(this.x, this.y, this.body[this.bodyVzdalenost.index].x, this.body[this.bodyVzdalenost.index].y)
            this.ys = yys(this.x, this.y, this.body[this.bodyVzdalenost.index].x, this.body[this.bodyVzdalenost.index].y)
        }
        if (vzdalenost(this.x, this.y, this.body[this.bodyVzdalenost.index].x, this.body[this.bodyVzdalenost.index].y) >= 10 && this.cas <= 0 && !this.forma) {
            this.x += this.xs * this.s * dt
            this.y += this.ys * this.s * dt
        }
        else if (this.cas <= 2) {
            this.pohyb()
            this.formaCas += dt
        }
        if (vzdalenost(this.x, this.y, this.body[this.bodyVzdalenost.index].x, this.body[this.bodyVzdalenost.index].y) < 10 && this.cas <= 0 && !this.forma) {
            this.bodyVzdalenost.vzdalenost = 10000
            this.cas = 120
            // console.log(this.cas + 'ahdahsdhajsjdahdashdahshdnauhsduoashdhaohds')

            for (var z = 0; z < 6; z++) {
                projektily.push(new Klobasa(this.x, this.y, 120, 40, Math.random() * canvas.width, Math.random() * canvas.height, 6))
            }
        }

        if (hrac.x + hrac.w >= this.x + 10 && hrac.x <= this.x + this.w - 10 && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h) {
            hrac.zivot[0] = "dead"
        }

    }
    }

    smrt() {
        if (this.zivoty <= 0) {
            waifus.splice(waifus.indexOf(this), 1)
            platformy.push(new Cil(canvas.width / 2, canvas.height / 2))
        }

    }

}