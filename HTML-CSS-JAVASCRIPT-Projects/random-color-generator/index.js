let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgcontainercolor = document.getElementById("bgContainer")

function changebgcolor() {
    let randomIndex = Math.ceil(Math.random() * 8)
    let colorCode = bgColorsArray[randomIndex]
    bgcontainercolor.style.backgroundColor = colorCode
}