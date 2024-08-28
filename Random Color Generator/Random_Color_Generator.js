let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let colorContainer = document.getElementById("bgContainer");
let numberOfBgColors = bgColorsArray.length;

function button() {
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);
    if (randomBgColorIndex === numberOfBgColors) {
        randomBgColorIndex = numberOfBgColors - 1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    colorContainer.style.backgroundColor = randomBgColor;
}
