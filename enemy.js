class Waifu {
    constructor(x, y, w, h, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "waifu1.png"
        this.body = [{x: x1, y: y1}, {x: x2, y: y2}, {x: x3, y: y3}, {x: x4, y: y4}, {x: x5, y: y5}]
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
        if (vzdalenost(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y) < this.s * 1.1) {
            this.pohyb()
            }
        this.x += this.xs * this.s
        this.y += this.ys * this.s
         
        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h){
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
        this.body = [{x: x1, y: y1}, {x: x2, y: y2}, {x: x3, y: y3}, {x: x4, y: y4}]
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
        if (vzdalenost(this.x, this.y, this.body[this.lokace].x, this.body[this.lokace].y) < this.s * 1.1) {
            this.pohyb()
            }
        this.x += this.xs * this.s
        this.y += this.ys * this.s
         
        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h){
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
        this.body = [{x: x1, y: y1}, {x: x2, y: y2}, {x: x3, y: y3}, {x: x4, y: y4}, {x: x5, y: y5}]
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
        if (this.lokace == this.body.length - 1 && this.cas == 0) {
            this.lokace = -1
             
        } 
        if (this.lokace < this.body.length - 1 && this.cas == 0) {   
            this.lokace += 1
            this.x = this.body[this.lokace].x
            this.y = this.body[this.lokace].y
            this.cas = 90
        }
        
    }

    pohnuti() {
        this.cas--
        if (this.cas <= 0) {
            this.pohyb()
        }
        if (hrac.x <= this.x + this.w && hrac.x + hrac.w >= this.x && hrac.y + hrac.h >= this.y && hrac.y <= this.y + this.h){
            hrac.zivot[0] = "dead"
        }
    }

    smrt() {
        if (this.status == "dead") {
            waifus.splice(waifus.indexOf(this), 1)
        }
    }
}