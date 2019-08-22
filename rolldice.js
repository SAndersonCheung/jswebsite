var result = null;

function rollD4() {
    result = Math.floor( Math.random() * 4 ) + 1;
    document.getElementById('txtD4').innerHTML = result;
}

function rollD6() {
    result = Math.floor( Math.random() * 6 ) + 1;
    document.getElementById('txtD6').innerHTML = result;
}

function rollD8() {
    result = Math.floor( Math.random() * 8 ) + 1;
    document.getElementById('txtD8').innerHTML = result;
}

function rollD10() {
    result = Math.floor( Math.random() * 10 ) + 1;
    document.getElementById('txtD10').innerHTML = result;
}

function rollD12() {
    result = Math.floor( Math.random() * 12 ) + 1;
    document.getElementById('txtD12').innerHTML = result;
}

function rollD20() {
    result = Math.floor( Math.random() * 20 ) + 1;
    document.getElementById('txtD20').innerHTML = result;
}

function rollCustom() {
    var custom = document.getElementById("cdicenum").value;
    result = Math.floor( Math.random() * custom ) + 1;
    document.getElementById('txtCustom').innerHTML = result;
}