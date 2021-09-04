let buttonELement = document.getElementById("sendbutton")
let errorMsg = document.getElementById("errormsg")
let givenphonenum = document.getElementById("phonenum")
let givenmsg = document.getElementById("msg")
let whatsurl = document.getElementById("whatsappurl")

function sendmsg() {
    let givenphonenumvalue = givenphonenum.value
    let givenmsgvalue = givenmsg.value
    if (givenphonenumvalue === "") {
        errorMsg.textContent = "Please Enter 10Digit Valid Phone Number"
    } else if (givenphonenumvalue.length == 10) {
        whatsurl.href = "https://api.whatsapp.com/send?phone=" + "+91" + givenphonenumvalue + "&text=" + givenmsgvalue;
    } else {
        errorMsg.textContent = "Please Enter Valid 10 Digit Mobile Number"
    }
}