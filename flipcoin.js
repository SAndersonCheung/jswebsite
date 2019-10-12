var result = null;

function flipCoin() {
    result = Math.floor( Math.random() * 2 ) + 1;
    
    if (result == 1){
        document.getElementById('coinVal').innerHTML = "Heads";
        document.getElementById('resultImg').src="./heads.jpg";
    } else if (result == 2){
        document.getElementById('coinVal').innerHTML = "Tails";
        document.getElementById('resultImg').src="./tails.jpg";
    }
    
    
}
