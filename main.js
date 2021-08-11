var hrac = new Player(40, 40, 40, 40)
var waifus = []
var platformy = []
var zbrane = []
var projektily = []
var tlacitka = []
var animace = []
// index hotovych levelu 
var levelsCompleted = 4
var inventar = new Inventar()
var smrt = 0
var lokaceLevely = 0
var spusteno = true
var vyber = 0
var obrazovka = "predHra"
var tlacitkaLokace = 0
var image = new Image()
var spawn = 0
var hover = 0
var hoverTime = 0
var pocetItemu = 0
var jokeProbehl = false
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
var bog = new Image()
bog.src = "bog.png"
var replayPause = false
var hoverTrue = false
var levelTime = 0
var skore = 0

var joky = []
var hudba = new Audio()
hudba.src = "seal.wav"
for (var o = 1; o < 6; o++) {
    joky.push(new Audio())
    joky[o - 1].src = "joke" + o + ".mp3"
}
var info = new Audio()
info.src = "info.mp3"
var bazina = new Audio()
bazina.src = "bog.mp3"
var kitchen = new Audio()
kitchen.src = "kitchen.mp3"

function spawny() {
    if (lokaceLevely == 0) {
        hrac = new Player(50, 400, 40, 40)
        platformy.push(new Bludiste(0, 0, 800, 300))
        platformy.push(new Bludiste(0, 500, 600, 500))
        platformy.push(new Bludiste(600, 600, 200, 500))
        platformy.push(new Bludiste(800, 0, 200, 300))
        platformy.push(new Bludiste(800, 500, 100, 400))
        platformy.push(new Bludiste(1000, 0, 200, 200))
        platformy.push(new Bludiste(1200, 0, 200, 1000))

        //tlacitka.push(new Portal( 100, 100, 2000))

        zbrane.push(new Bomba(670, 550))
        zbrane.push(new Bomba(1081, 221))

        //zbrane.push(new Mec(670, 550))

        //waifus.push(new Sutr(500,450))

        //platformy.push(new Scroll(200, 350,"sutrinfo.png"))

        //waifus.push(new Summoner(600, 400))

        waifus.push(new Dice(300, 350, 120, 120, 300, 350, 450, 350, 600, 350, 900, 350))
        waifus.push(new Dice(1000, 200, 120, 120, 1000, 200, 1000, 500, 1000, 800, 900, 350))

        platformy.push(new Cil(1050, 850))
    }

    if (lokaceLevely == 1) {
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

    if (lokaceLevely == 2) {

        waifus.push(new DiceBoss(500, 500))

        platformy.push(new Bludiste(300, 0, 20, 50))
        platformy.push(new Bludiste(300, 130, 20, 170))
        platformy.push(new Bludiste(0, 600, 20, 20))
        platformy.push(new Bludiste(100, 600, 150, 20))
        platformy.push(new Bludiste(500, 500, 300, 20))
        platformy.push(new Bludiste(800, 0, 20, 250))
        platformy.push(new Bludiste(100, 600, 150, 20))
        platformy.push(new Bludiste(700, 700, 380, 20))
        platformy.push(new Bludiste(1080, 450, 20, 100))
        platformy.push(new Bludiste(1080, 650, 20, 100))
        platformy.push(new Bludiste(1200, 100, 20, 200))
        platformy.push(new Bludiste(200, 800, 20, 100))

        platformy.push(new Dvere(300, 50, 20, 80))
        platformy.push(new Dvere(1080, 550, 20, 100))
        platformy.push(new Dvere(20, 600, 80, 20))

        platformy.push(new Cil(canvas.width / 2, canvas.height / 2))

    }

    if (lokaceLevely == 3) {
        hrac = new Player(50, 600, 40, 40)

        zbrane.push(new Mec(50,750))
        zbrane.push(new Mec(500,230))
        zbrane.push(new Mec(900,20))
        zbrane.push(new Mec(1200, 500))

        platformy.push(new Bludiste(0,0,400,300))
        platformy.push(new Bludiste(0,800,canvas.width,100))
        platformy.push(new Bludiste(600,600,20,200))
        platformy.push(new Bludiste(600,600,400,20))
        platformy.push(new Bludiste(1100,600,400,20))
        platformy.push(new Bludiste(400,280,100,20))
        platformy.push(new Bludiste(600,150,20,150))
        platformy.push(new Bludiste(600,150,220,20))
        platformy.push(new Bludiste(800,0,20,150))

        platformy.push(new Dvere(1000,600,100,20))
        platformy.push(new Dvere(500,280,100,20))

        platformy.push(new Scroll(100, 550,"sutrinfo.png"))

        waifus.push(new Sutr(500,500))
        waifus.push(new Sutr(1200,300))
        waifus.push(new Sutr(700,50))
        waifus.push(new Sutr(800,700))

        platformy.push(new Cil(720, 750 ))
    }

    if (lokaceLevely == 4) {
        hrac = new Player(canvas.width / 2, canvas.height / 2, 40, 40)

        waifus.push(new Summoner(50, canvas.height / 2))
        waifus.push(new Summoner(1200, canvas.height / 2))

        platformy.push(new Bludiste(canvas.width / 2 - 250, canvas.height / 2 + 70, 500, 20))
        platformy.push(new Bludiste(0, canvas.height / 2 - 60, 300, 20))
        platformy.push(new Bludiste(0, canvas.height / 2 + 180, 300, 20))
        platformy.push(new Bludiste(1100, canvas.height / 2 - 60, 300, 20))
        platformy.push(new Bludiste(1100, canvas.height / 2 + 180, 300, 20))

        zbrane.push(new Bomba(40, 40, 40, 40))
        zbrane.push(new Bomba(1270, 40, 40, 40))
        zbrane.push(new Bomba(40, 820, 40, 40))
        zbrane.push(new Bomba(1270, 820, 40, 40))

        platformy.push(new Cil(canvas.width / 2, canvas.height / 2 + 10, 40, 40))
    }

    if (lokaceLevely == 5) {

        waifus.push(new DiceBossParek(1000,400))
        
    } 

    else {

    }
}


var lastRender = 0
var progress = 0
var dt = 0
var dt2 = 0

function main(timestamp) {
    dt2 = dt
    progress = timestamp - lastRender
    dt = progress / (1000 / 60)
    lastRender = timestamp
    if (spawn == 0 && spusteno && obrazovka == "hra") {
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

        for (var h in waifus) {
            if (lokaceLevely == 2) {
                if (lokaceLevely == 2 && zbrane.length == 0 && inventar.inventory[0] == null && inventar.inventory[1] == null &&
                    inventar.inventory[2] == null && inventar.inventory[3] == null && inventar.inventory[4] == null && waifus[h].zivoty > 0) {
                    zbrane.push(new Bomba(Math.random() * 1150 + 50, Math.random() * 800 + 50))
                }

            }
        }

        if (lokaceLevely == 2 && waifus.length != 0) {
            bazina.play()
            bazina.loop = true

        }

        if (lokaceLevely == 5 && waifus.length != 0) {
            kitchen.play()
            kitchen.loop = true
        }

        else {

        }


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
        if (lokaceLevely == 2) {
            c.drawImage(bog, 0, 0, canvas.width, canvas.height)
            c.fillStyle = "black"
            c.globalAlpha = 0.2
            c.fillRect(0, 0, canvas.width, canvas.height)
            c.globalAlpha = 1
            
        }
        else {
            c.fillStyle = "rgb(27, 27, 27)"
            c.fillRect(0, 0, 1350, 900)
        }


        levelTime += 1 * dt

        if (levelTime >= 60 && obrazovka != "victory") {
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
            if (platformy[i].type != "scroll") {
            platformy[i].vykresleni()
            platformy[i].kolize()
            }
        }

        if (waifus.length != 0 && lokaceLevely == 2) {
            c.fillStyle = "black"
            c.fillRect(canvas.width / 2 - 250, canvas.height / 2 - 400, 500, 50)
            if (waifus.length > 0) {
                c.fillStyle = "black"
                c.fillRect(canvas.width / 2 - 248, canvas.height / 2 - 398, 496, 46)
                if (waifus[0].zivoty == 5) {
                    c.fillStyle = "green"
                    c.fillRect(canvas.width / 2 - 248, canvas.height / 2 - 398, 496, 46)
                }
                else if (waifus[0].zivoty == 4) {
                    c.fillStyle = "limegreen"
                    c.fillRect(canvas.width / 2 - 248, canvas.height / 2 - 398, 496 * 0.80, 46)
                }
                else if (waifus[0].zivoty == 3) {
                    c.fillStyle = "yellow"
                    c.fillRect(canvas.width / 2 - 248, canvas.height / 2 - 398, 496 * 0.60, 46)
                }
                else if (waifus[0].zivoty == 2) {
                    c.fillStyle = "orange"
                    c.fillRect(canvas.width / 2 - 248, canvas.height / 2 - 398, 496 * 0.40, 46)
                }
                else if (waifus[0].zivoty == 1) {
                    c.fillStyle = "red"
                    c.fillRect(canvas.width / 2 - 248, canvas.height / 2 - 398, 496 * 0.20, 46)
                }
            }
        }

        for (var i in animace) {
            animace[i].vykresleni()
        }

        for (var i in zbrane) {
            zbrane[i].vykresleni()
            zbrane[i].pohyb()
            zbrane[i].smazat()

        }

        for (var i in waifus) {
            waifus[i].vykresleni()
            waifus[i].pohnuti()
        }

        

        for (var i in projektily) {
            projektily[i].vykresleni()
            projektily[i].pohyb()
        }

        for (var i in tlacitka) {
            tlacitka[i].vykresleni()
        }

        for (var k in platformy) {
            if (platformy[k].type == "scroll") {
                platformy[k].vykresleni()
                platformy[k].kolize()
            }
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
            if (jokeProbehl == false) {
                jokeProbehl = true
                var jokeCislo = Math.floor(Math.random() * 5)
                if (jokeCislo == 5) {
                    jokeCislo = Math.floor(Math.random() * 5)
                }
                joky[jokeCislo].play()
            }
            smrt += 1 * dt
            if (smrt > 10 && !hrac.enter) {
                c.drawImage(kostka, 0, 0, canvas.width, canvas.height)
                c.fillStyle = "red"
                c.font = "900 120px serif"
                c.textAlign = "center"
                c.fillText("You died", canvas.width / 2, canvas.height / 2)
                c.textAlign = "start"
                skore = 0
                levelTime = 0
                projektily.length = 0
            }
            if (hrac.enter) {
                jokeProbehl = false
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
        if (hrac.escape && skore > 0) {
            bazina.pause()
            kitchen.pause()
            pocetItemu = 0
            hrac = new Player(40, 40, 40, 40)
            waifus = []
            projektily.length = 0
            platformy = []
            animace.length = 0
            zbrane = []
            inventar = new Inventar()
            obrazovka = "mainMenu"
            spawn = 0
            casText = 180
            screen("mainMenu")
            mainMenu()
            
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
        projektily.length = 0
        inventar = new Inventar()
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
            bazina.currentTime = 0
            kitchen.currentTime = 0
            tlacitka = []
            replay = []
            obrazovka = "hra"
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

            }
            break;

        case "predHra":

            console.log('Welcome to Closed Alpha of first version of GOotWH if you are able to play this game you presumably got the key to this game from me, if not you stole it and then you should go back to your dog kennel.')
            console.log("\nConsole is help for me to determine issues about game or get information that i need, for player it shoud NOT be used during gameplay.")
            break;

        case "Levely":
            obrazovka = "levels"
            tlacitka = []
            tlacitka.push(new Kriz(10, 10, 40, 40))
            for (var i = 0; i < 3; i++) {
                if (levelsCompleted >= i) {
                    tlacitka.push(new Levely(100 + 430 * i, 100, 300, 200, "level" + i + ".png", false, i))
                }
                else if (levelsCompleted < i) {
                    tlacitka.push(new Levely(100 + 430 * i, 100, 300, 200, "level" + i + ".png", true, i))
                }
            }
            for (var k = 0; k < 3; k++) {
                var level = k + 3
                if (levelsCompleted >= k + 3) {
                    tlacitka.push(new Levely(100 + 430 * k, 350, 300, 200, "level" + level + ".png", false, k + 3))
                }
                else if (levelsCompleted < k + 3) {
                    
                    tlacitka.push(new Levely(100 + 430 * k, 350, 300, 200, "level" + level + ".png", true, k + 3))
                }
            }
            break;

        case "victory":
            bazina.pause()
            obrazovka = "victory"
            tlacitka = []
            break;
    }
}

function mainMenu() {
    lokaceLevely = levelsCompleted
    c.fillStyle = "whitesmoke"
    c.fillRect(0, 0, 1350, 900)
    c.drawImage(menuimage, 0, 0, canvas.width, canvas.height)
    if (replay.length != 0 && casText > 0 && !replaySaveShow) {
        casText -= dt
        c.font = "30px Calibri"
        c.fillStyle = "white"
        c.fillText("Replay saved", 10, 30)


    }

    c.font = "60px serif"
    c.fillStyle = "white"
    c.textAlign = "center"
    c.fillText("GET OUT OF THE", canvas.width / 2, 100)
    c.font = "bolder italic 100px serif"
    c.fillStyle = "red"
    c.fillText("WAIFUS HOUSE", canvas.width / 2, 200)
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
        mazaniClick -= dt
    }

    if (mazaniClick <= 0) {
        hrac.klik.x = 0
        hrac.klik.y = 0
        mazaniClick = 1
    }

}

function predHra() {

    if (hoverTime >= 1000) {
        hoverTrue = true
    }

    if (hoverTime < 1000 && !hoverTrue) {
        hoverTime += 3 * dt
    }

    if (hoverTrue && hoverTime > 0) {
        hoverTime -= 5 * dt
    }

    if (hoverTime < 0) {
        hoverTime = 0
    }

    if (hoverTime > 1000) {
        hoverTime = 1000
    }


    hover = (hoverTime / 1000) * dt
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "whitesmoke"
    c.font = "30px serif"
    c.textAlign = "center"
    if (hover <= 1) {
        c.globalAlpha = 1
        c.fillStyle = "whitesmoke"
        c.fillText("From developer of Balls run reformed, Misa glass challenge and Fridge Heist", canvas.width / 2, canvas.height / 2 - 200)
        c.fillStyle = "black"
        c.globalAlpha = 1 - hover
        c.fillRect(canvas.width / 2 - 500, canvas.height / 2 - 230, 1000, 50)
    }
    if (hover <= 0 && hoverTrue) {
        c.globalAlpha = 1
        c.fillStyle = "whitesmoke"
        c.font = "50px serif"
        c.fillText("Get out of the Waifus House", canvas.width / 2, canvas.height / 2 - 200)
        c.fillText("Press [Enter] to continue", canvas.width / 2, canvas.height / 2)
        c.textAlign = "start"
        /*c.beginPath()   
        c.strokeStyle = "blue"
        c.lineWidth = 10
        c.lineCap = "square"
        c.moveTo(200, 100)
        c.lineTo(350, 100)
        c.stroke()
        */
        c.globalAlpha = 1
    }
    if (hrac.enter) {
        obrazovka = "mainMenu"
        screen("mainMenu")
    }
}

function victoryScreen() {
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "white"
    c.textAlign = "center"
    c.font = "900 80px serif"
    c.fillText("Victory", canvas.width / 2, canvas.height / 2)
    c.font = "50px serif"

    c.fillText("Time spent: " + skore + " seconds", canvas.width / 2, canvas.height / 2 + 75)
    c.fillText("Press [Enter] to continue to menu", canvas.width / 2, canvas.height / 2 + 150)
    c.fillText("or press [Esc] to restart level", canvas.width / 2, canvas.height / 2 + 225)
    if (hrac.enter) {
        obrazovka = "mainMenu"
        screen("mainMenu")
    }

    if (hrac.escape) {
        huraFamfaraVyhralJsi = false
        skore = 0
        waifus = []
        platformy = []
        animace.length = 0
        zbrane = []
        inventar = new Inventar()
        obrazovka = "hra"
        spawn = 0
        screen("hra")

    }
}

function controls() {

    c.fillStyle = "white"
    c.fillRect(0, 0, 1350, 900)
    c.drawImage(image, 0, 0, canvas.width, canvas.height)
    for (var b in tlacitka) {
        tlacitka[b].vykresleni()
    }
    if (hrac.escape || tlacitka[0].click == true) {
        screen("mainMenu")
        mainMenu()
    }
    if (hrac.klik.x != 0 && hrac.klik.y != 0) {
        mazaniClick -= dt
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
    c.fillRect(0, 0, canvas.width, canvas.height)
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