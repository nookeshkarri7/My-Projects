let msgboxEl = document.getElementById("msgbox");
let linksEl = document.getElementById("links");
let selectlistEl = document.getElementById("selectlist")
let phonenumbers1 = "987654321,987654321,987654321"
let phonenumbers2 = "987654321,987654321,987654321"
let phonenumber3 = "987654321,987654321,987654321"
let phonenumber4 = "987654321,987654321,987654321"
let phonenumberslist2 = [987654321,987654321,987654321]
let phonenumberlist3 =[987654321,987654321,987654321]
let phonenumberlist4 = [987654321,987654321,987654321]
let allcontainer = document.getElementById("allcontainer")
let listn = document.getElementById("listn")
let pass = document.getElementById("pass")
let password = document.getElementById("password")
let err = document.getElementById("err")

function checkpass() {

    if (pass.value === "257283") {
        allcontainer.classList.remove("d-none")
        password.classList.add("d-none")
    } else if ((pass.value === "1234")) {
        err.textContent = "Enter Correct Password"
    } else {
        err.textContent = "Enter Correct Password"
    }
}


let txt = document.getElementById("txt")

let recentmsgsel = document.getElementById("recentmsgs")
let sentbtn = document.getElementById("sent")
let newmsg = {
    selected1: "phonenumbers1"
}
listn.textContent = "Total No's in list " + phonenumberslist1.length
selectlistEl.addEventListener("change", function(event) {
    newmsg["selected1"] = selectlistEl.value
    let selected2 = selectlistEl.value
    if (selected2 === "phonenumbers1") {
        listn.textContent = "Total No's in list " + phonenumberslist1.length
    } else if (selected2 === "phonenumbers2") {
        listn.textContent = "Total No's in list " + phonenumberslist2.length
    } else if (selected2 === "phonenumber3") {
        listn.textContent = "Total No's in list " + phonenumberlist3.length
    } else if (selected2 === "phonenumber4") {
        listn.textContent = "Total No's in list " + phonenumberlist4.length
    }
})

function sendmsg() {
    if (msgboxEl.value !== "") {
        let selected = newmsg["selected1"]

        if (selected === "phonenumbers1") {
            linksEl.href = "sms:" + phonenumbers1 + ";?&body=" + msgboxEl.value
            txt.textContent = "Opening Messages"
        } else if (selected === "phonenumbers2") {
            linksEl.href = "sms:" + phonenumbers2 + ";?&body=" + msgboxEl.value
            txt.textContent = "Opening Messages"
        } else if (selected === "phonenumber3") {
            linksEl.href = "sms:" + phonenumber3 + ";?&body=" + msgboxEl.value
            txt.textContent = "Opening Messages"
        } else if (selected === "phonenumber4") {
            linksEl.href = "sms:" + phonenumber4 + ";?&body=" + msgboxEl.value
            txt.textContent = "Opening Messages"
        }
    } else {
        alert("Hi ..! Please enter your Message")
    }
}