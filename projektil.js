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
    }

    vykresleni() {
        if (this.expand <= 0.3) { 
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
    }

    pohyb() {
        this.rychlost *= 0.99
        this.x += this.sx * this.rychlost
        this.y += this.sy * this.rychlost

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
                    if (platformy[i].type == "dvere" && platformy[i].otevreno) {}
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
                //c.drawImage(this.obrazek, this.x - this.w, this.y - this.h, 80, 80)
                //projektily.splice(projektily.indexOf(this), 1)
                waifus[k].status = "dead"


            }
        }
    }

    vybuch() {
        this.sx = 0
        this.sy = 0
        this.rychlost = 0
        this.expand += 0.03 
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