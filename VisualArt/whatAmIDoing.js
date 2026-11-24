let canvas = document.getElementById("canvas").getContext("2d")


function bigSquare(){
    canvas.fillStyle = "LightGray"
    for(y = 0; y < 400; y+=20){
        for(x=0; x < 400; x+=20){
            canvas.fillRect(x, y, 10, 10)
            canvas.fillRect(x+10, y+10, 10, 10)
        }
    }
}

function miniSquare(){
    let check = 0
    for(y = 0; y < 390; y+=10){
        for(x=0; x < 390; x+=10){
                 if((x < 100 || y < 100 || x > 300 || y > 300) && check == 0){canvas.fillStyle = "Black"; check = 1}
            else if((x < 100 || y < 100 || x > 300 || y > 300) && check == 1){canvas.fillStyle = "White"; check = 0}

            else if((x > 100 || y > 100 || x < 300 || y < 300) && check == 0){canvas.fillStyle = "White"; check = 1}
            else if((x > 100 || y > 100 || x < 300 || y < 300) && check == 1){canvas.fillStyle = "Black"; check = 0}
            
            canvas.fillRect(x+9, y+8, 4, 4)
        }
    }
}

bigSquare()
miniSquare()