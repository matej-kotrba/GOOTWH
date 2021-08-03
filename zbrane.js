class Bomba {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 30
        this.h = 30
        this.image = new Image()
        this.image.src = "bomba.png"
        this.kruh = 0
        this.odstranit = false
        this.pocet = 0
        this.type = "bomba"
        this.vInventari = false
    }

    vykresleni() {

        for (var i = this.kruh; i < 11; i++) {
            c.fillStyle = 'rgb(160, 54, 36, 0.2)';
            c.beginPath();
            c.arc(this.x + this.w / 2, this.y + this.h / 2, i * 3, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.restore();
        }
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    pohyb() {
        
        if (hrac.x + hrac.w >= this.x - 30 && hrac.x <= this.x + this.w + 30 && hrac.y + hrac.h >= this.y - 30 && hrac.y <= this.y + this.h + 30) {
            c.fillStyle = "rgb(27, 27, 27)"
            c.fillRect(hrac.x + 5, hrac.y - 50, hrac.w - 10, 30)
            c.fillStyle = "white"
            c.font = "20px Arial"
            c.fillText("E", hrac.x + hrac.w / 2 - 7.5, hrac.y - 27.5)
            
           
        }
        if (this.pocet == 0 && hrac.x + hrac.w >= this.x - 30 && hrac.x <= this.x + this.w + 30 && hrac.y + hrac.h >= this.y - 30 && hrac.y <= this.y + this.h + 30) {
            pocetItemu++
            this.pocet++
            pocetItemuPravda = true
        }
        if (this.pocet == 1 && !(hrac.x + hrac.w >= this.x - 30 && hrac.x <= this.x + this.w + 30 && hrac.y + hrac.h >= this.y - 30 && hrac.y <= this.y + this.h + 30)){
            this.pocet = 0
            pocetItemuPravda = false
        }
        
    
    if(hrac.x + hrac.w >= this.x - 30 && hrac.x <= this.x + this.w + 30 && hrac.y + hrac.h >= this.y - 30 && hrac.y <= this.y + this.h + 30 && hrac.ee && inventar.inventory[inventar.vyber] == null && pocetItemu < 2) {
    pocetItemuPravda = false    
    this.odstranit = true
}

    }

smazat() {
    if (this.odstranit) {
        zbrane.splice(zbrane.indexOf(this), 1)
        inventar.inventory[inventar.vyber] = "bomba"
        inventar.inventoryData[inventar.vyber] = { x: this.x, y: this.y }
    }
}

delete () {
    if (waifus.length == 0) {
        zbrane.splice(zbrane.indexOf(this), 1)
    }
}
}