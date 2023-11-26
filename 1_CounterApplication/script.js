window.onload = function () {
    let display = document.getElementById('display');
    console.log(display);
}

function handleInc() {
    display.innerText = parseInt(display.innerText) + 1;
}

function handleDec() {
    display.innerText = parseInt(display.innerText) - 1;
}

function handleReset() {
    display.innerText = '0';
}