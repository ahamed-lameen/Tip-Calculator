/**
*
* base.js
* @author - Lameen
* @date - 11/03/2023
**/

function tips() {
    var bill = document.getElementById("bill").value;
    var persons = document.getElementById("total-people").value;
    var tip = document.getElementById("tip").value;
    if (bill.trim().length === 0) {
        document.getElementById("bill-error").innerHTML = "Enter bill";
    }
    else {
        document.getElementById("bill-error").innerHTML = "";
    }
    if (persons.trim().length === 0) {
        document.getElementById("persons-error").innerHTML = "Enter number of people";
    }
    else {
        document.getElementById("persons-error").innerHTML = "";
    }
    if (tip.trim().length === 0 ) {
       document.getElementById("tip-error").innerHTML = "Enter tip %";
    }
    else {
        document.getElementById("tip-error").innerHTML = "";
    }
    if (tip < 0 || tip > 100) {
        document.getElementById("tip-error").innerHTML = "Enter tip % between 0 to 100";
    }
    if (persons === "") {
        document.getElementById("total").innerHTML = "$0.00";
        document.getElementById("tip-amount").innerHTML =  "$0.00";
    }
    else {
        var total = bill/persons;
        var tipAmount = (tip / 100) * total;
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
        document.getElementById("tip-amount").innerHTML =  "$" + tipAmount.toFixed(2);
    }
}

function reload() {
    document.getElementById("bill").value = "0.00";
    document.getElementById("total-people").value = "0.00";
    document.getElementById("tip").value = "0.00";
    document.getElementById("total").innerHTML = "$0.00";
    document.getElementById("tip-amount").innerHTML = "$0.00";    
}