var result = null;

function flipCoin() {
    result = Math.floor( Math.random() * 2 ) + 1;
    document.getElementById('coinVal').innerHTML = result;
}