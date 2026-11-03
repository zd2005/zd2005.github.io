//Declaring Variables
let monthlyPayemnt, totalInterest, totalPayment
let loanAmount, yearsBorrowed, interestRate

document.getElementById("button").addEventListener("click", calc)

function calc(){
    //assigning values to variables
    loanAmount = document.getElementById('loanAmount').valueAsNumber
    yearsBorrowed = document.getElementById('yearsBorrowed').valueAsNumber
    interestRate = document.getElementById('interestRate').valueAsNumber
    
    //fun Math stuff
    yearsBorrowed = yearsBorrowed * 12
    let r = interestRate / 100 / 12
    let fancy = (1 + r)**yearsBorrowed

    monthlyPayemnt = loanAmount * ( (r*fancy) / (fancy - 1) )
    totalPayment = monthlyPayemnt * yearsBorrowed
    totalInterest = totalPayment - loanAmount

    //displaying Result
    document.getElementById('monthlyPayment').innerHTML = "Your Monthly Payment is $" + monthlyPayemnt.toFixed(2)
    document.getElementById('totalInterest').innerHTML = "Your Total Interest is $" + totalInterest.toFixed(2)
    document.getElementById('totalPayment').innerHTML = "Your Total Payment is $" + totalPayment.toFixed(2)
}