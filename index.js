"use strict";

let btnRef = document.querySelectorAll(".button_option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new_game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

/// Winning Pattern
let winningPattern = [[0,1,2], [0,3,6], [2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]       ];

// Player 'X' plays first

let XTurn = true;
let count = 0;

//win logic
const winChecker = () =>{
    for (const i of winningPattern) {
        let[element1, element2, element3] = [btnRef[i[0]].innerHTML,
        btnRef[i[1]].innerHTML, btnRef[i[2]].innerHTML,];
        // check if elements are filled 
        //if  3 empty elements are same and would give win as would
        if(element1 != "" && (element2 != "")  && element3 != "" ) {
            if((element1 === element2) ==element3){
                
            }
        }
    }
}

//Display X/O
btnRef.forEach((element)=>{
    element.addEventListener("click", () =>{
        if (XTurn){

            XTurn = false;
        //Display X
        element.innerHTML = "X";
        element.disabled = true;
        }
        else{
            XTurn = true;
            //Display Y
            element.innerHTML = "O";
            element.disabled = true;
        }
        // Increment count on each click
        count ++;
        if(count             === 9){
        // It's a draw since there are total 9 boxed
        }
        //check for win every click
        winChecker();
    })
})