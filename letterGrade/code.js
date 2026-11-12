document.getElementById("button").addEventListener("click", calc)
document.getElementById("score").addEventListener("input", calc)

function calc(){
    let numScore = document.getElementById("score").valueAsNumber
    let letGrade = ""

    if(numScore >= 97){letGrade = "A+"}
    if(numScore <= 97 && numScore >= 93){letGrade = "A"}
    if(numScore <= 93 && numScore >= 90){letGrade = "A-"}
    if(numScore <= 89 && numScore >= 87){letGrade = "B+"}
    if(numScore <= 87 && numScore >= 83){letGrade = "B"}
    if(numScore <= 83 && numScore >= 80){letGrade = "B-"}
    if(numScore <= 80 && numScore >= 77){letGrade = "C+"}
    if(numScore <= 77 && numScore >= 73){letGrade = "C"}
    if(numScore <= 73 && numScore >= 70){letGrade = "C-"}
    if(numScore <= 70 && numScore >= 67){letGrade = "D+"}
    if(numScore <= 67 && numScore >= 63){letGrade = "D"}
    if(numScore <= 63 && numScore >= 60){letGrade = "D-"}
    if(numScore <= 60){letGrade = "F"}
    if(letGrade == ""){letGrade = "F"}

    document.getElementById("result").innerHTML = "Your Letter Grade is a " + letGrade + "!"
}