class Inventar {
    constructor() {
        this.inventory = [null, null, null, null, null]
        this.vyber = 0
        this.image = new Image()
        this.image.src = "bomba.png"
        this.image1 = new Image()
        this.image1.src = "mec.png"
        this.image1Otoceny = new Image()
        this.image1Otoceny.src = "mecotoceny.png"
        this.inventoryData = [null, null, null, null, null]
    }

    vykresleni() {
        c.fillStyle = "black"
        c.fillRect(1098, 0, 252, 52)
        c.fillStyle = "rgb(107, 28, 28)"
        c.fillRect(1100, 0, 250, 50)
        for (var i = 0; i < 5; i++) {
            c.fillStyle = "rgb(163, 163, 163, 0.8)"
            c.fillRect(1102 + i * 50, 2, 46, 46)
        }
        c.fillStyle = "rgb(179, 170, 53)"
        c.fillRect(1102 + this.vyber * 50, 2, 46, 46)
        for (var k = 0; k < 5; k++) {
            if (this.inventory[k] == "bomba") {
                c.drawImage(this.image, 1105 + k * 50, 5, 40, 40)
            }
            if (this.inventory[k] == "mec") {


                c.drawImage(this.image1, 1105 + k * 50, 15, 40, 20)
            }
        }
        for (var l in projektily) {
            if (this.inventory[this.vyber] == "mec" && !hrac.otocenoMec && projektily[l].type != "mec") {
                c.drawImage(this.image1, hrac.x + hrac.w / 2, hrac.y + hrac.h / 2, 120, 35)
            }
            else if (this.inventory[this.vyber] == "mec" && hrac.otocenoMec && projektily[l].type != "mec") {
                c.drawImage(this.image1Otoceny, hrac.x + hrac.w / 2 - 120, hrac.y + hrac.h / 2, 120, 35)
            }
        }
        if (hrac.tabulka) {
            for (var o = 0; o < 5; o++) {
                if (this.inventory[o] == "bomba") {
                    c.drawImage(this.image, (canvas.width / 2 - 250) + 10 + 100 * o, canvas.height / 2 + 10, 80, 80)

                }
                if (this.inventory[o] == "mec")

                    c.drawImage(this.image1, (canvas.width / 2 - 250) + 10 + 100 * o, canvas.height / 2 + 35, 80, 25)
            }
        }
    }
}