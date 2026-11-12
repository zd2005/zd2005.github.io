document.getElementById("button").addEventListener("click", calc)


function calc() {
    let a = document.getElementById("first").valueAsNumber;
    let b = document.getElementById("second").valueAsNumber;
    let c = document.getElementById("third").valueAsNumber;   
    
    let highestNum = a
    if(b > highestNum){highestNum = b}
    if(c > highestNum){highestNum = c}

    document.getElementById("result").innerHTML = highestNum;
}