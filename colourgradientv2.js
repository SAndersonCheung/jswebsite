var ids = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var whichID = ["false", "false", "false", "false", "false", "false", "false", "false"];
var choice = [2];

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
    whichID[0] = "true";
}
function setTwo() {
    whichID[1] = "true"
}
function setThree() {
    whichID[2] = "true";
}
function setFour() {
    whichID[3] = "true";
}
function setFive() {
    whichID[4] = "true";
}
function setSix() {
    whichID[5] = "true";
}
function setSeven() {
    whichID[6] = "true";
}
function setEight() {
    whichID[7] = "true";
}
