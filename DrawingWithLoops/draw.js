let canvas = document.getElementById("canvas").getContext("2d")
let loopNum = 0

setInterval(setDisplay, 1000)

function setDisplay () {
    canvas.fillStyle = "Red"
    canvas.clearRect(0,0,400,400)
    if(loopNum == 0){first()}
    if(loopNum == 1){second()}
    if(loopNum == 2){third()}
    if(loopNum == 3){fourth()}
    if(loopNum == 4){fifth()}
    if(loopNum == 5){sixth()}
    if(loopNum == 6){seventh()}
    if(loopNum == 7){eigth()}
    if(loopNum == 8){ninth()}
    if(loopNum == 9){tenth()}
    if(loopNum == 10){eleventh()}
    if(loopNum == 11){twelvth()}
    if(loopNum == 12){thirteenth()}
    if(loopNum == 13){fourteenth()}
    if(loopNum == 14){fifteenth()}
    if(loopNum == 15){sixteenth()}
    if(loopNum == 16){seventeenth()}
    if(loopNum == 17){eighteenth()}
    loopNum++
    if(loopNum > 17){loopNum = 0}
}

function first () {
    for(i=10; i < 400; i+=30){
        canvas.fillRect(i, 10, 20, 20)
    }
}

function second () {
    for(i=10; i < 400; i+=30){
        canvas.fillRect(10, i, 20, 20)
    }
}

function third (){
    for(i=10; i < 400; i+=30){
        canvas.fillRect(i, i, 20, 20)
    } 
}

function fourth (){
    let y = 370
    for(x=10; x < 400; x+=30){
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }
}

function fifth () {
    let y = 370
    for(x=10; x < 400; x+=30){
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }
    for(i=10; i < 400; i+=30){
        canvas.fillRect(i, i, 20, 20)
    } 
}

function sixth () {
    for(y = 10; y < 400; y+=30){
        for(x=10; x < 400; x+=30){
            canvas.fillRect(x, y, 20, 20)
        }
    }
}

function seventh(){
    for(i=10; i < 400; i+=30){
        for(x=i; x < 400; x+=30)
        canvas.fillRect(x, i, 20, 20)
    } 
}

function eigth(){
    for(i=10; i < 400; i+=30){
        for(x=i; x > 0; x-=30)
        canvas.fillRect(x, i, 20, 20)
    } 
}

function ninth(){
    for(y = 10; y < 400; y+=60){
        for(x=10; x < 400; x+=60){
            canvas.fillRect(x, y, 20, 20)
            canvas.fillRect(x+30, y+30, 20, 20)
        }
    }
}

function tenth(){
    let y = 370
    for(x=10; x < 201; x+=30){
        for(i=x; i <= y; i+=30){
            canvas.fillRect(i, y, 20, 20)
        }
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }

}

function eleventh(){
    let y = 370
    for(x=10; x < 400; x+=30){
        canvas.fillStyle = "Red"
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }
    for(i=10; i < 400; i+=30){
        canvas.fillStyle = "Lime"
        canvas.fillRect(i, i, 20, 20)
    } 
}

function twelvth(){
    canvas.fillStyle = "Lime"
    let xi = 370
    for(i=10; i < 201; i+=30){
       canvas.fillRect(i, i, 20, 20)
       canvas.fillRect(xi,i,20,20)
       xi-=30
    } 
}

function thirteenth(){
    let y = 370
    for(x=10; x < 201; x+=30){
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }
    for(i=10; i < 201; i+=30){
        canvas.fillRect(i, i, 20, 20)
    } 
}

function fourteenth(){
    let y = 370
    for(x=10; x < 400; x+=30){
        if(x < 200){canvas.fillStyle = "Red"}
        else if(x > 200){canvas.fillStyle = "Lime"}
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }
    for(i=10; i < 400; i+=30){
        if(i < 200){canvas.fillStyle = "Red"}
        else if(i > 200){canvas.fillStyle = "Lime"}
        canvas.fillRect(i, i, 20, 20)
    } 
}

function fifteenth(){
    let y = 370
    for(x=10; x < 400; x+=30){
        if(y < 200){canvas.fillStyle = "Lime"}
        else if(y > 200){canvas.fillStyle = "Red"}
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }
    for(i=10; i < 400; i+=30){
        if(i < 200){canvas.fillStyle = "Lime"}
        else if(i > 200){canvas.fillStyle = "Red"}
        canvas.fillRect(i, i, 20, 20)
    } 
}

function sixteenth(){
    let y = 190
    for(x=10; x < 200; x+=30){
        canvas.fillStyle = "Lime"
        canvas.fillRect(x, y, 20, 20)
        y -= 30
    }
    for(i=10; i < 200; i+=30){
        canvas.fillStyle = "Red"
        canvas.fillRect(i, i, 20, 20)
    } 
}

function seventeenth(){
    let i = 0
    let totalPoints = 20

    while(i < totalPoints){
        canvas.fillStyle = "Yellow"
        x = 200+100*Math.cos(i/totalPoints*2*Math.PI)
        y = 200+100*Math.sin(i/totalPoints*2*Math.PI)
        canvas.fillRect(x-10, y-10, 20, 20)
        i++
    }
    canvas.fillStyle = "Lime"
    canvas.fillRect(0, 200, 400, 1)
    canvas.fillRect(200, 0, 1, 400)
}

function eighteenth(){
    for(let i = 0, totalPoints = 100; i < totalPoints; i+=0.5){
        let angle = 2.5 * i
        canvas.fillStyle = "Yellow"
        x = (angle-5)*Math.cos(angle * 20)
        y = (angle-5)*Math.sin(angle * 20)
        canvas.fillRect(x+200, y+200, 10, 10)
    }
}