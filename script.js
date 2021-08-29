const canvas = document.getElementById('canvas')
var c = canvas.getContext("2d")
c.strokeStyle = 'rgba(0, 0, 0, 0)'

function vzdalenost(startX, startY, x, y) {
    var a = x - startX
    var b = y - startY
    var c = Math.sqrt(a * a + b * b)
    return c
}

function xxs(startX, startY, x, y) {
    var a = x - startX
    var b = y - startY
    var c = Math.sqrt(a * a + b * b)
    var xs = a / c
    return xs
}

function yys(startX, startY, x, y) {
    var a = x - startX
    var b = y - startY
    var c = Math.sqrt(a * a + b * b)
    var ys = b / c
    return ys
}


addEventListener('keydown', function (e) {
    console.log(e)
    if (e.code == "KeyA") {
        hrac.aa = true
    }
    if (e.code == "KeyD") {
        hrac.dd = true
    }

    if (e.code == "KeyW") {
        hrac.ww = true
    }

    if (e.code == "KeyS") {
        hrac.ss = true
    }

    if (e.code == "KeyE") {
        hrac.ee = true
        if (pocetItemu >= 2 && !hrac.tabulka) {
            hrac.tabulka = true
        }
        else if (hrac.tabulka) {
            hrac.tabulka = false
        }
    }

    if (e.code == "KeyQ") {
        hrac.qq = true
    }

    if (e.code == "ArrowUp") {
        tlacitkaLokace--
    }

    if (e.code == "ArrowDown") {
        tlacitkaLokace++
    }

    if (e.code == "ArrowLeft") {
        if (hrac.tabulka) {
            hrac.vyberLokace--
            if (hrac.vyberLokace < 0) {
                hrac.vyberLokace = 9
            }
        }
    }

    if (e.code == "ArrowRight") {
        if (hrac.tabulka) {
            hrac.vyberLokace++
            if (hrac.vyberLokace > 9) {
                hrac.vyberLokace = 0
            }
        }
    }

    if (e.code == "Enter") {
        hrac.enter = true
        if (hrac.tabulka) {
            hrac.presun()
        }
        if (dialog && obrazovka == "hra") {
            dialogIndex++
        }
    }

    if (e.code == "Escape") {
        hrac.escape = true
    }

    if (e.code == "Space") {
        hrac.space = true
        if (dialog) {
            if (lokaceLevely == 5) {
                dialogIndex = dialogLevel5.length
            }
        }
        if (replayPause) {
            replayPause = false
        }
        else {
            replayPause = true
        }
    }
    if (e.code == "KeyF") {
        hrac.ff = true
    }
}
)

addEventListener('keyup', function (e) {
    if (e.code == "KeyA") {
        hrac.aa = false
    }
    if (e.code == "KeyD") {
        hrac.dd = false
    }

    if (e.code == "KeyW") {
        hrac.ww = false
    }

    if (e.code == "KeyS") {
        hrac.ss = false
    }

    if (e.code == "KeyE") {
        hrac.ee = false
    }

    if (e.code == "KeyQ") {
        hrac.qq = false
    }

    if (e.code == "Enter") {
        hrac.enter = false
    }

    if (e.code == "Escape") {
        hrac.escape = false
    }

    if (e.code == "Space") {
        hrac.space = false
    }
    if (e.code == "KeyF") {
        hrac.ff = false
    }

})

window.addEventListener("wheel", function (s) {
    console.log(s)
    if (s.deltaY > 0) {
        // dolu
        inventar.vyber++
        if (inventar.vyber > 4) {
            inventar.vyber = 0
        }

    }
    else if (s.deltaY < 0) {
        // nahoru
        inventar.vyber--
        if (inventar.vyber < 0) {
            inventar.vyber = 4
        }
    }
    else {
        console.log('kys')
    }
})

canvas.onmousemove = function (h) {
    var rect = canvas.getBoundingClientRect()
    hrac.mouse.x = (h.clientX - rect.left) * (canvas.clientWidth / canvas.width)
    hrac.mouse.y = (h.clientY - rect.top) * (canvas.clientHeight / canvas.height)
}

var mysKlik = false
var casKlik = 0
var hybaniKlik = false



canvas.addEventListener("mousedown", function (h) {
    var klik = { x: h.offsetX, y: h.offsetY }
    mysKlik = true
    hybaniKlik = true
    
    tlacitka.push(new KlikEfekt(klik.x, klik.y))
    console.log(klik)
    for (var d in tlacitka) {
        tlacitka[d].kliknuti(klik)
    }
})

canvas.addEventListener('mouseup', function (h) {
    hybaniKlik = false
    mysKlik = false
    casKlik = 0
})
