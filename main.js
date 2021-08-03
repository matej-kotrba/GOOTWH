var hrac = new Player(40, 40, 40, 40)
var waifus = []
var platformy = []
var zbrane = []
var projektily = []
var tlacitka = []
var animace = []
// index hotovych levelu 
var levelsCompleted = 0
var inventar = new Inventar()
var smrt = 0
var spusteno = true
var vyber = 0
var obrazovka = "predHra"
var tlacitkaLokace = 0
var image = new Image()
var spawn = 0
var pocetItemu = 0
var pocetItemuPravda = false
var casText = 0
var huraFamfaraVyhralJsi = false
var replaySaveShow = false
image.src = "controls.png"
var mazaniClick = 1
var replay = []
var snimekReplay = 0
var dvere = new Image()
dvere.src = "dvere.png"
var zralok = new Image()
zralok.src = "waifu1.png"
var kostka = new Image()
kostka.src = "4dice.png"
var teleport = new Image()
teleport.src = "wifus2.png"
var bomba = new Image()
bomba.src = "bomba.png"
var start = new Image()
start.src = "start.png"
var pause = new Image()
pause.src = "pause.png"
var menuimage = new Image()
menuimage.src = "mainmenu.png"
var cil = new Image()
cil.src = "cil.png"
var replayPause = false
var levelTime = 0
var skore = 0

var hudba = new Audio()
hudba.src = "seal.wav"

function spawny() {
    platformy.push(new Bludiste(200, 0, 50, 500))
    platformy.push(new Bludiste(200, 600, 50, 400))
    platformy.push(new Bludiste(250, 600, 100, 50))
    platformy.push(new Bludiste(250, 450, 100, 50))
    platformy.push(new Bludiste(350, 600, 50, 100))
    platformy.push(new Bludiste(500, 600, 50, 100))
    platformy.push(new Bludiste(550, 600, 100, 50))
    platformy.push(new Bludiste(650, 600, 50, 400))
    platformy.push(new Bludiste(350, 100, 250, 50))
    platformy.push(new Bludiste(600, 0, 50, 150))
    platformy.push(new Bludiste(450, 450, 150, 50))
    platformy.push(new Bludiste(550, 250, 50, 200))
    platformy.push(new Bludiste(600, 250, 250, 50))
    platformy.push(new Bludiste(950, 250, 200, 50))
    platformy.push(new Bludiste(1100, 0, 50, 250))
    platformy.push(new Bludiste(1100, 400, 50, 350))
    platformy.push(new Bludiste(800, 750, 450, 50))

    platformy.push(new Dvere(400, 620, 100, 50))
    platformy.push(new Dvere(350, 460, 100, 30))
    platformy.push(new Dvere(250, 110, 100, 30))
    platformy.push(new Dvere(560, 150, 30, 100))
    platformy.push(new Dvere(850, 260, 100, 30))
    platformy.push(new Dvere(700, 760, 100, 30))
    platformy.push(new Dvere(1110, 300, 30, 100))
    platformy.push(new Cil(1250, 200))

    waifus.push(new Waifu(250, 350, 2000 * 0.05, 1730 * 0.05, 250, 350, 450, 350, 450, 150, 250, 150, 250, 350))
    waifus.push(new Port(750, 600, 250, 200, 800, 50, 400, 700, 600, 400, 700, 100, 800, 500))
    waifus.push(new Dice(200, 490, 120, 120, 200, 490, 350, 490, 500, 490, 600, 490))
    waifus.push(new Dice(690, 800, 120, 120, 690, 300, 690, 300, 1010, 300, 690, 600))

    zbrane.push(new Bomba(300, 800))
    zbrane.push(new Bomba(480, 20))
    zbrane.push(new Bomba(1100, 830))
    zbrane.push(new Bomba(350, 800))

    //animace.push(new Plamen(100, 100, 100, 100))

}


function main() {
    if (spawn == 0) {
        spawny()
        spawn++
    }
    if (spusteno && obrazovka == "hra") {
        replaySaveShow = false
        replay.push({
            hracData: { x: hrac.x, y: hrac.y, inventar: inventar.inventory, smrt: smrt },
            platformyData: { platformy: [], dvere: [], cil: [] },
            enemy: [],
            objekty: [],
            projektil: []

        })
        if (replay.length == 1) {
            for (var b in platformy) {
                if (platformy[b].type == "platforma") {
                    replay[0].platformyData.platformy.push({ x: platformy[b].x, y: platformy[b].y, w: platformy[b].w, h: platformy[b].h })
                }
                if (platformy[b].type == "dvere") {
                    replay[0].platformyData.dvere.push({ x: platformy[b].x, y: platformy[b].y, w: platformy[b].w, h: platformy[b].h })
                }
                if (platformy[b].type == "portal") {
                    replay[0].platformyData.cil.push({ x: platformy[b].x, y: platformy[b].y, w: platformy[b].w, h: platformy[b].h })

                }
            }
        }

        for (var s in waifus) {
            if (waifus[s].type == "zralok") {
                replay[replay.length - 1].enemy.push({ x: waifus[s].x, y: waifus[s].y, w: waifus[s].w, h: waifus[s].h, type: "zralok" })
            }
            if (waifus[s].type == "kostka") {
                replay[replay.length - 1].enemy.push({ x: waifus[s].x, y: waifus[s].y, w: waifus[s].w, h: waifus[s].h, type: "kostka" })
            }
            if (waifus[s].type == "teleport") {
                replay[replay.length - 1].enemy.push({ x: waifus[s].x, y: waifus[s].y, w: waifus[s].w, h: waifus[s].h, type: "teleport" })
            }
        }

        for (var r in zbrane) {
            if (zbrane[r].type == "bomba") {
                replay[replay.length - 1].objekty.push({ x: zbrane[r].x, y: zbrane[r].y, w: zbrane[r].w, h: zbrane[r].h, type: "bomba" })
            }
        }

        for (var j in projektily) {
            if (projektily[j].type == "bomba") {
                replay[replay.length - 1].projektil.push({ x: projektily[j].x, y: projektily[j].y, w: projektily[j].w, h: projektily[j].h, type: "bomba" })
            }
        }

        //console.log(replay.hracData)
        c.fillStyle = "rgb(27, 27, 27)"
        c.fillRect(0, 0, 1350, 900)

        levelTime++

        if (levelTime == 60 && obrazovka != "victory") {
            skore++
            levelTime = 0
        }

        if (pocetItemuPravda == false) {
            pocetItemu = 0
        }

        if (pocetItemu >= 2 && hrac.ee) {
            hrac.inventar()
        }

        for (var i in platformy) {
            platformy[i].vykresleni()
            platformy[i].kolize()
        }

        for (var i in waifus) {
            waifus[i].vykresleni()
            waifus[i].pohnuti()
        }

        for (var i in zbrane) {
            zbrane[i].vykresleni()
            zbrane[i].pohyb()
            zbrane[i].smazat()

        }

        for (var i in animace) {
            animace[i].vykresleni()
        }

        for (var i in projektily) {
            projektily[i].vykresleni()
            projektily[i].pohyb()
        }

        for (var i in tlacitka) {
            tlacitka[i].vykresleni()
        }

        hrac.vykresleni()
        hrac.pohyb()
        hrac.inventar()

        inventar.vykresleni()
        if (!hrac.tabulka) {
            hrac.lokaceInventar = [null, null, null, null, null]
            hrac.blizkoHraci = [null, null, null, null, null]
            hrac.vyberLokace = 0
            for (var v in zbrane) {
                zbrane[v].vInventari = false
            }
        }
        for (var i in zbrane) {
            zbrane[i].delete()
        }
        if (hrac.zivot[0] == "dead") {
            //c.fillStyle = "black"
            //c.fillRect(0, 0, 1350, 900)
            smrt++
            if (smrt > 10 && smrt < 120) {
                c.drawImage(kostka, 0, 0, canvas.clientWidth, canvas.clientHeight)
                c.fillStyle = "red"
                c.font = "900 120px serif"
                c.textAlign = "center"
                c.fillText("You died", canvas.clientWidth / 2, canvas.clientHeight / 2)
                c.textAlign = "start"
                skore = 0
                levelTime = 0
            }
            if (smrt >= 120) {
                smrt = 0
                hrac.zivot[0] = "hp"
                hrac = new Player(40, 40, 40, 40)
                waifus = []
                animace.length = 0
                platformy = []
                zbrane = []
                inventar = new Inventar()
                spawn = 0
            }

        }
        for (var i in waifus) {
            waifus[i].smrt()
        }
        if (waifus.length == 0) {

        }
        if (hrac.escape) {
            hrac = new Player(40, 40, 40, 40)
            waifus = []
            platformy = []
            animace.length = 0
            zbrane = []
            inventar = new Inventar()
            obrazovka = "mainMenu"
            spawn = 0
            casText = 180
            mainMenu()
            screen("mainMenu")
        }


    }
    if (obrazovka == "mainMenu") {

        mainMenu()
    }

    if (obrazovka == "predHra") {
        predHra()
    }

    if (obrazovka == "ovladani") {
        casText = 0
        controls()
    }

    if (obrazovka == "replay") {
        casText = 0
        playReplay()
    }

    if (obrazovka == "levels") {
        casText = 0
        levels()
    }

    if (obrazovka == "victory") {
        victoryScreen()
    }

    if (huraFamfaraVyhralJsi) {
        hrac = new Player(40, 40, 40, 40)
        waifus = []
        platformy = []
        animace.length = 0
        zbrane = []
        inventar = new Inventar()
        spusteno = true
        obrazovka = "mainMenu"
        spawn = 0
        casText = 180
        obrazovka = "victory"
        screen("victory")
    }

    if (spusteno) {
        window.requestAnimationFrame(main)
    }
}

function run() {
    if (!spusteno) {
        window.requestAnimationFrame(main)
        spusteno = true
    }
}

function stop() {
    if (spusteno) {
        spusteno = false
    }
}

function screen(volba) {
    switch (volba) {
        case "mainMenu":
            levelTime = 0
            skore = 0
            huraFamfaraVyhralJsi = false
            obrazovka = "mainMenu"
            tlacitka = []
            tlacitka.push(new Tlacitko(525, 300, 300, 100, "xd", "Play", 30, -10))
            tlacitka.push(new Tlacitko(525, 500, 300, 100, "xd", "Levels", 40, -10))
            tlacitka.push(new Tlacitko(525, 700, 300, 100, "xd", "Controls", 50, -10))
            tlacitka.push(new Tlacitko(1120, 800, 200, 80, "xd", "Replay", 42, -10))
            break;

        case "hra":
            obrazovka = "hra"
            tlacitka = []
            replay = []
            hrac.x = 40
            hrac.y = 40
            run()
            break;

        case "ovladani":
            obrazovka = "ovladani"
            tlacitka = []
            tlacitka.push(new Kriz(10, 10, 40, 40))

            break;

        case "replay":
            if (replay.length != 0) {
                obrazovka = "replay"
                replayPause = false
                snimekReplay = 0
                tlacitka = []
                tlacitka.push(new Kriz(10, 10, 40, 40))
                break;
            }

        case "predHra":
            break;

        case "Levely":
            obrazovka = "levels"
            tlacitka = []
            tlacitka.push(new Kriz(10, 10, 40, 40))
            for (var i = 0; i < 3; i++) {
                if (levelsCompleted >= i) {
                    tlacitka.push(new Levely(100 + 430 * i, 100, 300, 200, "level1.png" /*"level" + i + ".png"*/, false, i))
                }
                else if (levelsCompleted < i) {
                    tlacitka.push(new Levely(100 + 430 * i, 100, 300, 200, "level1.png" /*"level" + i + ".png"*/, true, i))
                }
            }
            for (var k = 0; k < 3; k++) {
                if (levelsCompleted >= k + 3) {
                    tlacitka.push(new Levely(100 + 430 * k, 350, 300, 200, "level1.png" /*"level" + k + 3 + ".png"*/, false, k + 3))
                }
                else if (levelsCompleted < k + 3) {
                    tlacitka.push(new Levely(100 + 430 * k, 350, 300, 200, "level1.png" /*"level" + k + 3 + ".png"*/, true, k + 3))
                }
            }
            break;

        case "victory":
            obrazovka = "victory"
            tlacitka = []
    }
}

function mainMenu() {
    c.fillStyle = "whitesmoke"
    c.fillRect(0, 0, 1350, 900)
    c.drawImage(menuimage, 0, 0, canvas.clientWidth, canvas.clientHeight)
    if (replay.length != 0 && casText > 0 && !replaySaveShow) {
        casText--
        c.font = "30px Calibri"
        c.fillStyle = "white"
        c.fillText("Replay saved", 10, 30)


    }

    c.font = "60px serif"
    c.fillStyle = "white"
    c.textAlign = "center"
    c.fillText("GET OUT OF THE", canvas.clientWidth / 2, 100)
    c.font = "bolder italic 100px serif"
    c.fillStyle = "red"
    c.fillText("WAIFUS HOUSE", canvas.clientWidth / 2, 200)
    c.textAlign = "start"

    if (casText <= 0) {
        casText = 0
    }

    if (!replaySaveShow && casText == 0) {
        replaySaveShow = true
    }

    for (var i in tlacitka) {
        tlacitka[i].vykresleni(i)


    }
    if (tlacitka.length > 0) {
        if (tlacitka[0].funguje == true && tlacitka[0].click == true) {
            screen("hra")
        }

        else if (tlacitka[1].funguje == true && tlacitka[1].click == true) {
            screen("Levely")
        }

        else if (tlacitka[2].funguje == true && tlacitka[2].click == true) {
            screen("ovladani")
        }

        else if (tlacitka[3].funguje == true && tlacitka[3].click == true) {
            screen("replay")
        }

    }
    if (hrac.klik.x != 0 && hrac.klik.y != 0) {
        mazaniClick--
    }

    if (mazaniClick <= 0) {
        hrac.klik.x = 0
        hrac.klik.y = 0
        mazaniClick = 1
    }

}

function predHra() {
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    c.fillStyle = "whitesmoke"
    c.font = "bold 50px serif"
    c.textAlign = "center"
    c.fillText("Press [Enter] to continue", canvas.clientWidth / 2, canvas.clientHeight / 2)
    c.textAlign = "start"
    if (hrac.enter) {
        obrazovka = "mainMenu"
        screen("mainMenu")
    }
}

function victoryScreen() {
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    c.fillStyle = "white"
    c.textAlign = "center"
    c.font = "900 80px serif"
    c.fillText("Victory", canvas.clientWidth / 2, canvas.clientHeight / 2)
    c.font = "50px serif"
    c.fillText("Time spent: " + skore + " seconds", canvas.clientWidth / 2, canvas.clientHeight / 2 + 75)
    c.fillText("Press [Enter] to countinue", canvas.clientWidth / 2, canvas.clientHeight / 2 + 150)
    if (hrac.enter) {
        obrazovka = "mainMenu"
        screen("mainMenu")
    }
}

function controls() {

    c.fillStyle = "white"
    c.fillRect(0, 0, 1350, 900)
    c.drawImage(image, 0, 0, canvas.clientWidth, canvas.clientHeight)
    for (var b in tlacitka) {
        tlacitka[b].vykresleni()
    }
    if (hrac.escape || tlacitka[0].click == true) {
        screen("mainMenu")
        mainMenu()
    }
    if (hrac.klik.x != 0 && hrac.klik.y != 0) {
        mazaniClick--
    }

    if (mazaniClick <= 0) {
        hrac.klik.x = 0
        hrac.klik.y = 0
        mazaniClick = 1
    }
}

function playReplay() {
    c.fillStyle = "lightblue"
    c.fillRect(0, 0, 1350, 900)

    for (var m in tlacitka) {
        tlacitka[m].vykresleni()
    }

    if (replayPause) {
        c.drawImage(pause, 1290, 10, 50, 50)
    }

    if (!replayPause) {
        c.drawImage(start, 1290, 10, 50, 50)
    }

    for (var g in replay[0].platformyData.platformy) {
        c.fillStyle = "rgb(143, 143, 143)"
        c.fillRect(replay[0].platformyData.platformy[g].x, replay[0].platformyData.platformy[g].y,
            replay[0].platformyData.platformy[g].w, replay[0].platformyData.platformy[g].h)
    }

    for (var j in replay[0].platformyData.dvere) {
        c.drawImage(dvere, replay[0].platformyData.dvere[j].x, replay[0].platformyData.dvere[j].y,
            replay[0].platformyData.dvere[j].w, replay[0].platformyData.dvere[j].h)
    }

    for (var a in replay[0].platformyData.cil) {
        c.drawImage(cil, replay[0].platformyData.cil[a].x - 115, replay[0].platformyData.cil[a].y - 140, 250, 200)
    }

    for (var h in replay[snimekReplay].objekty) {
        c.drawImage(bomba, replay[snimekReplay].objekty[h].x, replay[snimekReplay].objekty[h].y, replay[snimekReplay].objekty[h].w, replay[snimekReplay].objekty[h].h)
    }

    for (var k in replay[snimekReplay].enemy) {
        if (replay[snimekReplay].enemy[k].type == "zralok") {
            c.drawImage(zralok, replay[snimekReplay].enemy[k].x, replay[snimekReplay].enemy[k].y, replay[snimekReplay].enemy[k].w, replay[snimekReplay].enemy[k].h)
        }
        if (replay[snimekReplay].enemy[k].type == "kostka") {
            c.drawImage(kostka, replay[snimekReplay].enemy[k].x, replay[snimekReplay].enemy[k].y, replay[snimekReplay].enemy[k].w, replay[snimekReplay].enemy[k].h)
        }
        if (replay[snimekReplay].enemy[k].type == "teleport") {
            c.drawImage(teleport, replay[snimekReplay].enemy[k].x, replay[snimekReplay].enemy[k].y, replay[snimekReplay].enemy[k].w, replay[snimekReplay].enemy[k].h)
        }
    }

    for (var s in replay[snimekReplay].projektil) {
        if (replay[snimekReplay].projektil[s].type == "bomba") {
            c.drawImage(bomba, replay[snimekReplay].projektil[s].x, replay[snimekReplay].projektil[s].y, replay[snimekReplay].projektil[s].w, replay[snimekReplay].projektil[s].h)
        }
    }

    hrac.x = replay[snimekReplay].hracData.x
    hrac.y = replay[snimekReplay].hracData.y
    inventar.inventory = replay[snimekReplay].hracData.inventar
    smrt = replay[snimekReplay].hracData.smrt

    hrac.vykresleni()
    if (snimekReplay < replay.length && !replayPause) {
        snimekReplay++
    }
    if (snimekReplay == replay.length) {
        snimekReplay = 0
    }

    if (hrac.escape || tlacitka[0].click == true) {
        tlacitka = []
        obrazovka = "mainMenu"
        screen("mainMenu")
        mainMenu()
    }

}

function levels() {
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    for (var b in tlacitka) {
        tlacitka[b].vykresleni()
    }

    if (hrac.escape || tlacitka[0].click == true) {
        tlacitka = []
        obrazovka = "mainMenu"
        screen("mainMenu")
        mainMenu()
    }
}

screen("predHra")

window.requestAnimationFrame(main)