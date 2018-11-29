$(document).ready(function() {

    let player = 1;

    $(".square").on("click", function(event){

        let squareSelected = $(this);
        let PotatoCss = document.querySelector("#turnPotato");
        let BananaCss = document.querySelector("#turnBanana");
        let turnStart = document.querySelector("#turnStart");

        if(squareSelected.hasClass("potato") || squareSelected.hasClass("banana")) {
            alert("Please choose annother field");
        }else{
            if(player === 1) {
                squareSelected.addClass("potato");
                if(checkIfPlayerWon("potato")) {
                    alert("Winner! player potato has won!");
                } else {
                    turnStart.setAttribute("style", "display: none;")
                    PotatoCss.setAttribute("style", "display: none;")
                    player = 2;
                    BananaCss.setAttribute("style", "display: block;");
                }
            }else{
                squareSelected.addClass("banana");
                if(checkIfPlayerWon("banana")) {
                    alert("Winner! player bannana has won!");
                } else {
                    turnStart.setAttribute("style", "display: none;")
                    BananaCss.setAttribute("style", "display: none;")
                    player = 1;
                    PotatoCss.setAttribute("style", "display: block;");
                }
            }
        }
    });
    function checkIfPlayerWon(symbol){

        if($("#btn1").hasClass(symbol) && $("#btn2").hasClass(symbol) && $("#btn3").hasClass(symbol)) {
            return true;
        } else if ($("#btn4").hasClass(symbol) && $("#btn5").hasClass(symbol) && $("#btn6").hasClass(symbol)) {
            return true;
        } else if ($("#btn7").hasClass(symbol) && $("#btn8").hasClass(symbol) && $("#btn9").hasClass(symbol)) {
            return true;
        } else if ($("#btn1").hasClass(symbol) && $("#btn4").hasClass(symbol) && $("#btn7").hasClass(symbol)) {
            return true;
        } else if ($("#btn2").hasClass(symbol) && $("#btn5").hasClass(symbol) && $("#btn8").hasClass(symbol)) {
            return true;
        } else if ($("#btn3").hasClass(symbol) && $("#btn6").hasClass(symbol) && $("#btn9").hasClass(symbol)) {
            return true;
        } else if ($("#btn1").hasClass(symbol) && $("#btn5").hasClass(symbol) && $("#btn9").hasClass(symbol)) {
            return true;
        } else if ($("#btn3").hasClass(symbol) && $("#btn5").hasClass(symbol) && $("#btn7").hasClass(symbol)) {
            return true;
        } else {
            return false;
        }
    }
});