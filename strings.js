// String Reversal Methods
function reverseString1(){

    var str = document.getElementById("instring").value;
    // seperate
    var split = str.split("");
    var reverse = split.reverse();
    var join = reverse.join("");
    document.getElementById('reverseResult').innerHTML = join;
}

function reverseString2(){

    var str = document.getElementById("instring").value;
    // in one line
    return str.split("").reverse().join("");
}

function reverseString3(){

    var str = document.getElementById("instring").value;
    // without .reverse()
    let strArr = str.split("");
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        var temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;

        start ++;
        end --;
    }
    return strArr.join("");
}

// String Vowel Counting Methods
function vowelCount(){
    
    var str = document.getElementById("instring").value;
    
    let strArr = str.split("");
    let resArr = [];
    let counter = 0;
    for (i in strArr){
        if (isVowel(strArr[i])){
            resArr[counter] = strArr[i];
            counter++;
        }
    }
    document.getElementById('vowelResult').innerHTML = resArr;
}

function isVowel(char){
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
        return true;
    } else {
        return false;
    }
}
