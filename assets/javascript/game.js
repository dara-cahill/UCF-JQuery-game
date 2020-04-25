var blueNum, orangeNum, clearNum, greenNum, randomComputerNum, wins, losses

// the number it was assigned is added to the total score (as a calculator)
// if total score === numToMatch print WINNER! to the UI in increment wins by 1
// if total score excedes numToMatch incrament losses by 1 and reinitalize game
wins=0
losses=0

function init (){
    blueNum = pickRandomNum(1,12);
    orangeNum = pickRandomNum(1,12);
    clearNum = pickRandomNum(1,12);
    greenNum = pickRandomNum(1,12);
    var randomNumber = pickRandomNum(19,120);
    updateWinValueOnUI(wins);   
    updateLossesValueOnUI(losses);
    updateRandomNumberOnUI(randomNumber);
}

function pickRandomNum(min,max){
    var randomNum = 1 + Math.floor(Math.random() * (max-min)) + min;
    console.log(randomNum);
    return randomNum;
}

$("#blueCrystal").on("click", function(){
    console.log("Blue")
    blueNum = pickRandomNum(1,12);
});

$("#orangeCrystal").on("click", function(){
    console.log("Orange")
    orangeNum = pickRandomNum(1,12);
});

$("#clearCrystal").on("click", function(){
    console.log("Clear")
    clearNum = pickRandomNum(1,12);
});

$("#greenCrystal").on("click", function(){
    console.log("Green")
    greenNum = pickRandomNum(1,12);
});




function updateWinValueOnUI (newWinValue){
    document.getElementById("winsCounter").innerHTML = newWinValue;
}

function updateLossesValueOnUI (newLossesValue){
    document.getElementById("lossesCounter").innerHTML = newLossesValue;
}

function updateRandomNumberOnUI (newrandomComputerNum){
    document.getElementById("numToMatch").innerHTML = newrandomComputerNum;
}

init ()