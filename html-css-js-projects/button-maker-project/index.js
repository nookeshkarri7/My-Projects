let bgColor = document.getElementById("bgColorInput")
let fontColor = document.getElementById("fontColorInput")
let fontSize = document.getElementById("fontSizeInput")
let fontWeight = document.getElementById("fontWeightInput")
let padding2 = document.getElementById("paddingInput")
let borderRadius2 = document.getElementById("borderRadiusInput")
let customBtn = document.getElementById("customButton")

function createBtn() {
    customBtn.style.backgroundColor = bgColor.value
    customBtn.style.color = fontColor.value
    customBtn.style.fontSize = fontSize.value
    customBtn.style.fontWeight = fontWeight.value
    customBtn.style.padding = padding2.value
    customBtn.style.borderRadius = borderRadius2.value

}