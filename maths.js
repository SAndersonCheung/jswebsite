// Power Functions
function squared(){
    let inp = document.getElementById("input").value;
    let result = inp * inp;
    document.getElementById("squared").innerHTML = result;
}

function cubed(){
    let inp = document.getElementById("input").value;
    let result = inp * inp * inp;
    document.getElementById("cubed").innerHTML = result;
}


function cusPow(){
    let inp = document.getElementById("input").value;
    let count = document.getElementById("custom").value;
    let result = inp;
    
    for (i = 0; i < count; i++){
        result = result * inp;
    }
    
    document.getElementById('cuspower').innerHTML = result;
}

// 