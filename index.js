/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let num = 0;
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("len")
let volEl = document.getElementById("vol")
let massEl = document.getElementById("mass")

function convert(){
    num = inputEl.value;
    Length();
    Volume();
    Mass();
}

function Length(){
    let feet = num * 3.281;
    let meter= num / 3.281;
    lengthEl.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
}

function Volume(){
    let liters = num * 0.264;
    let gallons = num / 0.264;
    volEl.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`
}

function Mass(){
    let kilos  = num * 2.204;
    let pounds = num / 2.204;
    massEl.textContent =`${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`
}
