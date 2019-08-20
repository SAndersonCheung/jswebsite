function makeGradient(){
    var colourOne = null;
    var colourTwo = null;
    document.getElementById('bigbox').style.background = 'linear-gradient(to right, retrieveColour(colourOne), retrieveColour(colourTwo))';
}

function retrieveColour(cat){
    return document.getElementById(cat).style.backgroundColor;
}

function setOne(){
    var colour = one;
}
function setTwo(){
    var colour = two;
}
function setThree(){
    var colour = three;
}
function setFour(){
    var colour = four;
}
function setFive(){
    var colour = five;
}
function setSix(){
    var colour = six;
}
function setSeven(){
    var colour = seven;
}
function setEight(){
    var colour = eight;
}
