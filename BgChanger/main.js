const button = document.getElementById("bg-button");
const colorCode = document.querySelector("#current__color--code");


button.addEventListener('click', () => {
    var randomColor = "#";
    console.log(randomColor)
    randomColor += [Math.random().toString(16).slice(2, 8)];
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    currentColorcode = `Current colorcode is : ${randomColor}`
    colorCode.innerHTML=currentColorcode;
})

