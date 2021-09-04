let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertToSecFormEl = document.getElementById("convertToSec");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");
let convertBtnEl = document.getElementById("convertBtn");

let time = {
    hours: "",
    minutes: ""
}

hoursInputEl.addEventListener("change", function(event) {
    time.hours = event.target.value
})

minutesInputEl.addEventListener("change", function(event) {
    time.minutes = event.target.value
})



function convertToSec() {
    let hours = parseInt(hoursInputEl.value);
    let minutes = parseInt(minutesInputEl.value);
    if (hoursInputEl.value === "") {
        timeInSecondsEl.textContent = ""
        errorMsgEl.textContent = "Please enter a valid number of hours"
    } else if (minutesInputEl.value === "") {
        timeInSecondsEl.textContent = ""
        errorMsgEl.textContent = "Please enter a valid number of minutes"
    } else {
        errorMsgEl.textContent = ""
        hoursInputEl.value = "";
        minutesInputEl.value = ""
        let seconds = ((hours) * 60 + minutes) * 60;
        timeInSecondsEl.classList.add("timeInSeconds");
        timeInSecondsEl.textContent = seconds + "s";
    }


}

convertBtnEl.addEventListener("click", convertToSec)

convertToSecFormEl.addEventListener("submit", function(event) {
    event.preventDefault()
})