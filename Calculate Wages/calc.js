document.getElementById("calc").addEventListener("click", calculate)

function calculate(){
    let nHours = document.getElementById("nHours").valueAsNumber
    let hourlyWage = document.getElementById("hourlyWage").valueAsNumber
    let ot = document.getElementById("ot").valueAsNumber
    let hoursWorked = document.getElementById("hoursWorked").valueAsNumber
    let otHours = 0
    
    if(hoursWorked > nHours){otHours = hoursWorked - nHours; hoursWorked = nHours}
    document.getElementById("dailyWage").innerHTML = (hourlyWage * nHours) + (ot * otHours)
}