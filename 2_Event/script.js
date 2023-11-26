window.onload = function () {
    document.getElementById("container1").addEventListener('click', () => { alert("You have click on me!"); });
    document.getElementById("container2").addEventListener('dblclick', () => { alert("You have double click on me!"); });
    window.onkeydown = function (event) {
        let ele = document.getElementById('container5');
        ele.innerHTML = `${event.code} <br> key is down`;
    }

    window.onkeyup = function (event) {
        let ele = document.getElementById('container5');
        ele.innerHTML = `${event.code} <br> key is up`;
    }
}


function handleMouseOver() {
    console.log("mOUSE OVER");
    let element = document.getElementById('container3');
    element.innerText = "Mouse Over";
}

function handleMouseOut() {
    console.log("mOUSE Out");
    let element = document.getElementById('container3');
    element.innerText = "Mouse Out";
}

function handleKeyPress(event) {
    console.log(event);
    let element = document.getElementById('container4');

    element.innerText = "Key Pressed";
}
