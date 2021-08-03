class Player {
    constructor(x, y, sx, sy) {
        this.x = x
        this.y = y
        this.w = 60
        this.h = 60
        this.spawnx = sx
        this.spawny = sy
        this.image = new Image()
        this.image.src = "green.png"
        this.zivot = ["hp"]
        this.lastkey = null
        this.cas = 120
        this.tabulka = false
        this.lokaceInventar = [null, null, null, null, null]
        this.vyberLokace = 0
        this.blizkoHraci = [null, null, null, null, null]
        this.bomba = new Image()
        this.bomba.src = "bomba.png"
        this.mouse = {x: 0, y: 0}
        this.klik = {x: 0, y: 0}
    }

    vykresleni() {
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    pohyb() {
        if (this.zivot[0] == "dead") {
            this.cas--
            if (this.cas == 0) {
                this.x = this.spawnx
                this.y = this.spawny
                this.cas = 120
            }

        }
        if (this.ww && this.y >= 0 && this.zivot != "dead" && this.tabulka == false) {
            this.y -= 5
            this.lastkey = "w"
        }
        if (this.aa && this.x >= 0 && this.zivot != "dead" && this.tabulka == false) {
            this.x -= 5
            this.lastkey = "a"
        }
        if (this.ss && this.y + this.h <= 900 && this.zivot != "dead" && this.tabulka == false) {
            this.y += 5
            this.lastkey = "s"
        }
        if (this.dd && this.x + this.w <= 1350 && this.zivot != "dead" && this.tabulka == false) {
            this.x += 5
            this.lastkey = "d"
        }
        if (inventar.inventory[inventar.vyber] == "bomba" && this.qq) {
            //zbrane.push(new Bomba(inventar.inventoryData[inventar.vyber].x, inventar.inventoryData[inventar.vyber].y))
            if (this.lastkey == "d") {
                projektily.push(new BombaHozena(this.x + this.w / 2, this.y + this.h / 2, 1, 0))
                inventar.inventory[inventar.vyber] = null
                inventar.inventoryData[inventar.vyber] = null
            }
            else if (this.lastkey == "a") {
                projektily.push(new BombaHozena(this.x + this.w / 2, this.y + this.h / 2, -1, 0))
                inventar.inventory[inventar.vyber] = null
                inventar.inventoryData[inventar.vyber] = null
            }
            else if (this.lastkey == "w") {
                projektily.push(new BombaHozena(this.x + this.w / 2, this.y + this.h / 2, 0, -1))
                inventar.inventory[inventar.vyber] = null
                inventar.inventoryData[inventar.vyber] = null
            }
            else if (this.lastkey == "s") {
                projektily.push(new BombaHozena(this.x + this.w / 2, this.y + this.h / 2, 0, 1))
                inventar.inventory[inventar.vyber] = null
                inventar.inventoryData[inventar.vyber] = null
            }
        }
    }

    inventar() {
        if (this.tabulka) {
            c.fillStyle = "rgb(218, 182, 23)"
            c.fillRect(canvas.width / 2 - 250, canvas.height / 2 - 100, 500, 200)

            for (var i = 0; i < 5; i++) {
                c.fillStyle = "grey"
                c.fillRect((canvas.width / 2 - 250) + 5 + 100 * i, canvas.height / 2 - 95, 90, 90)
                if (i == this.vyberLokace) {
                    c.fillStyle = "yellow"
                    c.fillRect((canvas.width / 2 - 250) + 5 + 100 * i, canvas.height / 2 - 95, 90, 90)
                }

            }

            for (var o = 0; o < 5; o++) {
                c.fillStyle = "rgb(107, 28, 28, 0.5)"
                c.fillRect((canvas.width / 2 - 250) + 5 + 100 * o, canvas.height / 2 + 5, 90, 90)
                if (o + 5 == this.vyberLokace && this.vyberLokace > 4) {

                    c.fillStyle = "yellow"
                    c.fillRect((canvas.width / 2 - 250) + 5 + 100 * o, canvas.height / 2 + 5, 90, 90)
                }
            }
            for (var b in zbrane) {
                if (hrac.x + hrac.w >= zbrane[b].x - 30 && hrac.x <= zbrane[b].x + zbrane[b].w + 30 && hrac.y + hrac.h >= zbrane[b].y - 30 &&
                    hrac.y <= zbrane[b].y + zbrane[b].h + 30) {
                    for (var n in this.blizkoHraci) {
                        if (this.blizkoHraci[n] == null && this.blizkoHraci[0] != b && this.blizkoHraci[1] != b && this.blizkoHraci[2] != b
                            && this.blizkoHraci[3] != b && this.blizkoHraci[4] != b) {
                            this.blizkoHraci[n] = b

                        }
                    }
                }

            }
            for (var v in this.blizkoHraci) {
                if (this.blizkoHraci[v] != null) {
                    if (this.lokaceInventar[v] == "bomba") {
                        c.drawImage(zbrane[this.blizkoHraci[v]].image, (canvas.width / 2 - 250) + 10 + 100 * v, canvas.height / 2 - 90, 80, 80)
                    }
                    for (var l in this.lokaceInventar) {
                        
                        if (this.lokaceInventar[l] == null && zbrane[this.blizkoHraci[v]].vInventari == false) {
                            switch (zbrane[this.blizkoHraci[v]].type) {
                                case "bomba": this.lokaceInventar[l] = "bomba"
                                    zbrane[this.blizkoHraci[v]].vInventari = true

                                    break;
                            }
                            break;

                        }

                    }
                }
                if (this.blizkoHraci[v] == null && this.lokaceInventar[v] != null) {
                    if (this.lokaceInventar[v] == "bomba") {
                        console.log('sad')
                        c.drawImage(this.bomba, (canvas.width / 2 - 250) + 10 + 100 * v, canvas.height / 2 - 90, 80, 80)
                    }
                }
            }
        }
        /*if (!hrac.tabulka) {
            for (var s in zbrane) {
                zbrane[s].vInventari = false
            }
        }*/
    }

    presun() {
        if (hrac.tabulka && this.enter) {
            if (this.vyberLokace < 5 && this.lokaceInventar[this.vyberLokace] != null) {
                for (var p in inventar.inventory) {
                    if (inventar.inventory[p] == null) {
                        inventar.inventory[p] = this.lokaceInventar[this.vyberLokace]
                        this.lokaceInventar[this.vyberLokace] = null
                        zbrane[this.blizkoHraci[this.vyberLokace]].x = 2000
                    }
                }

            }
           /* if (this.vyberLokace > 4 && inventar.inventory[this.vyberLokace - 5] != null) {
                for (var m in hrac.lokaceInventar) {
                    for (var q in hrac.lokaceInventar) {
                        if (hrac.lokaceInventar[q] == null) {
                            if (inventar.inventory[m] == "bomba") {
                                console.log('pushnuti')
                                hrac.lokaceInventar[m] = inventar.inventory[this.vyberLokace - 5]
                                inventar.inventory[this.vyberLokace - 5] = null
                            }

                        }
                    }
                }
            }*/
        }
    }
}