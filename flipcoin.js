var result = null;

function flipCoin() {
    result = Math.floor( Math.random() * 2 ) + 1;
    
    if (result == 1){
        document.getElementById('coinVal').innerHTML = "Heads";
        document.getElementById('resultImg').src="/resources/heads.jpg";
    } else if (result == 2){
        document.getElementById('coinVal').innerHTML = "Tails";
        document.getElementById('resultImg').src="/resources/tails.jpg";
    }
    
    
}