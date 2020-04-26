var blueNum, orangeNum, clearNum, greenNum, randomComputerNum, wins, losses, total, randomNumber

// onclick add number to total
// if total score === numToMatch print WINNER! to the UI in increment wins by 1
// if total score excedes numToMatch incrament losses by 1 and reinitalize game
wins=0
losses=0

function init (){
    blueNum = pickRandomNum(1,12);
    orangeNum = pickRandomNum(1,12);
    clearNum = pickRandomNum(1,12);
    greenNum = pickRandomNum(1,12);
    randomNumber = pickRandomNum(19,120);
    total=0;
    updateWinValueOnUI(wins);   
    updateLossesValueOnUI(losses);
    updateRandomNumberOnUI(randomNumber);
    updateTotalScoreOnUI(total);
}

function pickRandomNum(min,max){
    var randomNum = 1 + Math.floor(Math.random() * (max-min)) + min;
    console.log(randomNum);
    return randomNum;
}

function calculateTotal(numNum){
    total = numNum + total
    console.log(total);
    updateTotalScoreOnUI(total);
    if (total===randomNumber){
        wins++
        init()
    } else if (total>randomNumber) {
        losses++
        init()
    }
}

$("#blueCrystal").on("click", function(){
    console.log(blueNum, "Blue");
    calculateTotal(blueNum);
});

$("#orangeCrystal").on("click", function(){
    console.log(orangeNum, "Orange");
    calculateTotal(orangeNum);
});

$("#clearCrystal").on("click", function(){
    console.log(clearNum, "Clear");
    calculateTotal(clearNum);
});

$("#greenCrystal").on("click", function(){
    console.log(greenNum, "Green");
    calculateTotal(greenNum);
});




function updateWinValueOnUI (newWinValue){
    $("#winsCounter").html(newWinValue);
}

function updateLossesValueOnUI (newLossesValue){
    $("#lossesCounter").html(newLossesValue);
}

function updateRandomNumberOnUI (newrandomComputerNum){
    $("#numToMatch").html(newrandomComputerNum);
}

function updateTotalScoreOnUI (newTotalScore){
    $("#totalScore").html(newTotalScore);
}

init ()