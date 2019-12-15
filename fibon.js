let canvas = document.getElementById("fibCanvas");
let ctx = canvas.getContext("2d");

function calLines(){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    for (let i = 0; i < 50; i++){
        ctx.lineTo(fibo(i), i);
        ctx.stroke();
    }
}

function fibo(length){
    let a = 1, b = 0, temp;
    
    while (length >= 0){
        temp = a;
        a = a + b;
        b = temp;
        length--;
    }
    
    return b;
}