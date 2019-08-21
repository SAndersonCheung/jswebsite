var ids = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var whichID = ["false", "false", "false", "false", "false", "false", "false", "false"];

function makeGradient() {
    var colourOne = null;
    var colourTwo = null;
    
    for (var i = 0; i < ids.length - 1; i++){
        if (whichID[i] == "true" && colourOne == null) {
            colourOne = ids[i];
        }
        if (whichID[i] == "true" && colourOne != null) {
            colourTwo = ids[i];
        }
    } 
    
    document.getElementById('bigbox').style.background = 'linear-gradient(to right, retrieveColour(colourOne), retrieveColour(colourTwo))';
}

function retrieveColour(colour) {
    return document.getElementById(colour).style.backgroundColor;
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
