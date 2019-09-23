var ids = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var whichID = ["false", "false", "false", "false", "false", "false", "false", "false"];
var choice = [8];

function makeGradient() {
    

    document.getElementById('bigbox').style.background = `linear-gradient(to right, ${retrieveColour(colourOne)}, ${retrieveColour(colourTwo)})`;
}

function retrieveColour(colour) {
    return document.defaultView.getComputedStyle(document.getElementById(colour)).getPropertyValue("background-color");
}

function doReset() {
    for (var i = 0; i < choice.length; i++){
        choice[i] = null;
    }
    
    document.getElementById('bigbox').style.background='white'
}

function setOne() {
    choice[0] == 1;
}
function setTwo() {
    choice[0] == 2;
}
function setThree() {
    choice[0] == 3;
}
function setFour() {
    choice[0] == 4;
}
function setFive() {
    choice[0] == 5;
}
function setSix() {
    choice[0] == 6;
}
function setSeven() {
    choice[0] == 7;
}
function setEight() {
    choice[0] == 8;
}
