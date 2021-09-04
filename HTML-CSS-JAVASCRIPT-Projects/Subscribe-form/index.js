let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg")
let emailErrMsgEl = document.getElementById("emailErrMsg")
let subscribeFormEL = document.getElementById("subscribeForm")

nameEl.addEventListener("blur", function() {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*"
    } else {
        nameErrMsgEl.textContent = ""
    }
})

emailEl.addEventListener("blur", function() {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*"
    } else {
        emailErrMsgEl.textContent = ""
    }
})

subscribeFormEL.addEventListener("submit", function(event) {
    event.preventDefault()
})