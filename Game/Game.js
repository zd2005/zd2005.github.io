//defining the gameChar for future use
let gameChar
let gameObstacle = []
let moveSpeed = 1
let hahaLoser = 0

//defining the gameSpace
let gameSpace = {
    canvas : document.createElement("canvas"),
    start : function() {
        //Height and Width and giving context
        this.canvas.width = 500
        this.canvas.height = 500
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        //setting the frame rate interval
        this.interval = setInterval(updateGameSpace, 20)
        //checking for any keys being pressed
        window.addEventListener('keydown', function (e){
            gameSpace.keys = (gameSpace.keys || [])
            gameSpace.keys[e.key] = true
        })
        window.addEventListener('keyup', function (e){
            gameSpace.keys[e.key] = false
        })
    },
    //clearing the entire canvas
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    
}

document.getElementById("button").addEventListener("click", updateSpeed)

//onLoad function just initializing things
function startGame(){
    gameSpace.start()
    //look at that there is that variable I declared earlier
    gameChar = new component(20, 20, "purple", 20, 20)
    gameObstacle.push(new component(5, 550, "red", 495, 0))
    gameObstacle.push(new component(5, 550, "red", 0, 0))
    gameObstacle.push(new component(550, 5, "red", 0, 0))
    gameObstacle.push(new component(550, 5, "red", 0, 495))
}

//defining everything about component class
//defined as a function because defining classes scare me
function component(width, height, color, x, y){
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0

    //replacing what gets lost on the clear
    this.update = function(){
        ctx = gameSpace.context
        ctx.fillStyle = color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    //defining how the piece moves
    this.move = function(){
        this.x += this.speedX
        this.y += this.speedY
    }
    //defining the collision detection
    this.crashObs = function(otherObj){
        let myLeft = this.x
        let myRight = this.x + (this.width)
        let myTop = this.y
        let myBottom = this.y + (this.height)
        let otherLeft = otherObj.x
        let otherRight = otherObj.x + (otherObj.width)
        let otherTop = otherObj.y
        let otherBottom = otherObj.y + (otherObj.height)
        let hasCrash = true
        if ((myBottom < otherTop) || (myTop > otherBottom) || (myRight < otherLeft) || (myLeft > otherRight)){
            hasCrash = false
        }
        return hasCrash
    }
}


//in charge of grabing the number out of the input box and setting it as the moveSpeed variable
function updateSpeed(){
    moveSpeed = document.getElementById("speed").valueAsNumber
}


//gets called every frame about 50 times a second
function updateGameSpace(){
    //clears the canvas
    gameSpace.clear()

    //sets the character speed to 0 while everything is getting updated
    gameChar.speedX = 0
    gameChar.speedY = 0

    //iterates through the gameObstacle array to check if a collision has been detected
    for(i = 0; i < gameObstacle.length; i++){
        if(gameChar.crashObs(gameObstacle[i])){
            resetLevel()
        }
    }
    //lots of if statements taking keyboard inputs and converting it to usable data
    if(gameSpace.keys && gameSpace.keys["a"]){gameChar.speedX = -moveSpeed}
    if(gameSpace.keys && gameSpace.keys["d"]){gameChar.speedX = moveSpeed}
    if(gameSpace.keys && gameSpace.keys["w"]){gameChar.speedY = -moveSpeed}
    if(gameSpace.keys && gameSpace.keys["s"]){gameChar.speedY = moveSpeed}

    //keeping these for now incase I want to reimpliment arrowkeyMovement
    //if(gameSpace.keys && gameSpace.keys["ArrowLeft"]){gameChar.speedX = -moveSpeed}
    //if(gameSpace.keys && gameSpace.keys["ArrowRight"]){gameChar.speedX = moveSpeed}

    //changed the original arrowkey movement in favor of up and down arrows adjusting move speed
    if(gameSpace.keys && gameSpace.keys["ArrowUp"]){moveSpeed+=0.25}
    if(gameSpace.keys && gameSpace.keys["ArrowDown"]){moveSpeed-=0.25}
    //sets and checks min and max speed
    if(moveSpeed > 40){moveSpeed = 40}
    if(moveSpeed < 0 ){moveSpeed = 0}

    //moves the peice
    gameChar.move()
    //calls to the update function inside the gameChar object and each gameObstacle Object
    for(i = 0; i < gameObstacle.length; i++){
        gameObstacle[i].update()
    }
    gameChar.update()
    document.getElementById("currentSpeed").innerHTML = "your current speed is " + moveSpeed.toFixed(2) + "<br> Deaths : " + hahaLoser
}

//moves the player back to starting position and increments death counter
function resetLevel(){
    gameChar.x = 20
    gameChar.y = 20
    hahaLoser++
}