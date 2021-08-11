class Tlacitko {
    constructor(x, y, w, h, barva, text, levo, dole) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.barva = barva
        this.text = text
        this.levo = levo
        this.dole = dole
        this.funguje = false
        this.click = false
        this.hover = 0
        
    }

    vykresleni() {
        c.fillStyle = "black"
        c.fillRect(this.x - 2, this.y - 2, this.w + 4, this.h + 4)
        c.fillStyle = 'rgb(153, 153, 153)'
        c.fillRect(this.x, this.y, this.w, this.h)
        if (hrac.mouse.x >= this.x && hrac.mouse.x <= this.x + this.w && hrac.mouse.y >= this.y && hrac.mouse.y <= this.y + this.h) {
            this.funguje = true
            if (this.hover < 10) {
                this.hover++
                c.globalAlpha = this.hover / 10
            }
            c.fillStyle = "rgb(133, 0, 0)"
            c.fillRect(this.x, this.y, this.w, this.h)

        }
        else {
            this.funguje = false
            //this.hover = 0
            if (this.hover > 0) {
                this.hover--
                c.globalAlpha = this.hover / 10
                c.fillStyle = "rgb(133, 0, 0)"
                c.fillRect(this.x, this.y, this.w, this.h) 
            }
             

        }
        
        c.fillStyle = "white"
        c.font = "30px Arial"
        c.globalAlpha = 1
        c.fillText(this.text, this.x + this.w / 2 - this.levo, this.y + this.h / 2 - this.dole)

    }

    kliknuti(klik) {
        if (klik.x >= this.x && klik.x <= this.x + this.w && klik.y >= this.y && klik.y <= this.y + this.h) {
            this.click = true
            console.log(this.click)
        }
        else {
            this.click = false
        }
    }
}

class Kriz {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.funguje = false
        this.click = false
        this.krizek = new Image()
        this.krizek.src = "kriz.png"
        this.krizekonhover = new Image()
        this.krizekonhover.src = "krizonclick.png"
    }

    vykresleni() {
        c.drawImage(this.krizek, this.x, this.y, this.w, this.h)
        if (hrac.mouse.x >= this.x && hrac.mouse.x <= this.x + this.w && hrac.mouse.y >= this.y && hrac.mouse.y <= this.y + this.h) {
            c.drawImage(this.krizekonhover, this.x, this.y, this.w, this.h)
            this.funguje = true
        }
        else {
            this.funguje = false
        }
        


    }
    kliknuti(klik) {
        if (klik.x >= this.x && klik.x <= this.x + this.w && klik.y >= this.y && klik.y <= this.y + this.h) {
            this.click = true
            console.log(this.click)
        }
        else {
            this.click = false
        }
    }

}

class Levely {
    constructor(x, y, w, h, level, locked, index) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = level
        this.locked = locked
        this.zamek = new Image()
        this.zamek.src = "locked.png"
        this.index = index
        this.bestTime = 0
    }

    vykresleni() {
        if (levelsCompleted >= this.index) {
            this.locked = false
        }
        else if (levelsCompleted < this.index) {
            this.locked = true
        }

        if (hrac.mouse.x >= this.x && hrac.mouse.x <= this.x + this.w && hrac.mouse.y >= this.y && hrac.mouse.y <= this.y + this.h) {
            this.funguje = true
            c.fillStyle = "red"
            c.fillRect(this.x, this.y, this.w, this.h)
        }
        else {
            this.funguje = false
            c.fillStyle = "white"
            c.fillRect(this.x, this.y, this.w, this.h)
        }

        c.drawImage(this.image, this.x + 2, this.y + 2, this.w - 4, this.h - 4)
        

        if (this.locked == true) {
            c.fillStyle = "rgba(0,0,0,0.4)"
            c.fillRect(this.x + 2, this.y + 2, this.w - 4, this.h - 4)
            c.drawImage(this.zamek, this.x + this.w / 2 - 50, this.y + this.h / 2 - 80, 100, 150)
        }
    }

    kliknuti(klik) {
        if (klik.x >= this.x && klik.x <= this.x + this.w && klik.y >= this.y && klik.y <= this.y + this.h && this.locked == false) {
            this.click = true
            lokaceLevely = this.index
            console.log(lokaceLevely)
            tlacitka.length = 0
            screen("hra")
            console.log(this.click)
        }
        else {
            this.click = false
        }
    }
}

class Plamen {
    constructor(x, y, w, h, duration) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.pocetPlamen = 0
        this.cas = 0
        this.images = []
        this.duration = duration
        for (var i = 0; i < 15; i++) {
            this.images.push(new Image())
            this.images[i].src = "./flame/flame/" + i + ".png"
        }
    }

    vykresleni() {
        if (this.cas % 6 < dt2) {
            this.pocetPlamen++
            if (this.pocetPlamen > 14) {
                this.pocetPlamen = 0
            }
        }
        this.duration -= dt
        if (this.duration > 0) {
            c.drawImage(this.images[this.pocetPlamen], this.x, this.y, this.w, this.h)
        }
        this.cas += dt
    }

}

class Portal {
    constructor(x,y,duration) {
        this.x = x
        this.y = y
        this.w = 150
        this.h = 150
        this.duration = duration
        this.cas = 0
        this.pocet = 0
        this.images = []
        for (var o = 0; o < 6; o++) {
            this.images.push(new Image())
            this.images[o].src = "./portal/portal" + o + ".png"
        }
    }

    vykresleni() {
        if (this.cas % 6 < dt2) {
            this.pocet++
            if (this.pocet > 5) {
                this.pocet = 0
            }
        }
        this.duration -= dt
        if (this.duration > 0) {
            c.drawImage(this.images[this.pocet], this.x, this.y, this.w, this.h)
        }
        this.cas += dt
    }
}