let billAmountgiven = document.getElementById("billAmount");
let percentTip = document.getElementById("percentageTip");
let tipamount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let warningMsg = document.getElementById("errorMessage");
let msgWarning = "Please Enter a Valid Input.";

function calculatevalues() {
    if (billAmountgiven.value == "") {
        warningMsg.textContent = msgWarning
    } else if (percentTip.value == "") {
        warningMsg.textContent = msgWarning
    } else {
        let billAmountinput = parseInt(billAmountgiven.value);
        let percentTipinput = parseInt(percentTip.value);
        let calculatedTip = ((percentTipinput / 100) * billAmountinput);
        let calculatedtotalamount = billAmountinput + calculatedTip;
        tipamount.value = calculatedTip;
        totalamount.value = calculatedtotalamount;
        warningMsg.textContent = ""
    }
}