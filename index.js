"use strict";

let btnRef = document.querySelectorAll(".button_option");
let popupRef = document.querySelector(".popup");
let newGameBtn = document.querySelector(".new_game");
let restartBtn = document.querySelector(".restart");
let msgRef = document.querySelector(".message");

/// Winning Pattern Array
let winningPattern = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]];
let XTurn = true;
let count = 0;
//disable all buttons
const disabledButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    // enable popup
    popupRef.classList.remove("hide");
}

//enable all buttons (for new game and restart)
const enableButtons = () => {
    btnRef.forEach(element => {
        element.innerHTML = "";
        element.disabled = "false";
    });
    popupRef.classList.add("hide");
    window.location.reload();
}
//new game
newGameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  
   
})
restartBtn.addEventListener("click", () => {
   
    count = 0;
    enableButtons();

})

// executed when a player wins

const winFunction =(letter) => {
    disabledButtons();
    if(letter == 'X'){
         msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
}
// function for draw
const drawFunction = () =>{
    disabledButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
}
// win logic
const winChecker = () =>{
    //loop through all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [btnRef[i[0]].innerHTML,
        btnRef[i[1]].innerHTML, btnRef[i[2]].innerHTML];
        // check if elements are filled 
        //if  3 empty elements are same and would give win as would
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                //if  all 3 buttons have same values then pass the
                // value to winFunction
                winFunction(element1);
            }
        }
    }
}


//Display X/O
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (XTurn) {
            XTurn = false;
            //Display X
            element.innerHTML = "X";
            element.disabled = true;
        }
        else {
            XTurn = true;
            //Display Y
            element.innerHTML = "O";
            element.disabled = true;
        }
        // Increment count on each click
        count++;
        if (count == 9) {
         drawFunction(); 
        }
         //check for win every click
         winChecker();
    })
})
