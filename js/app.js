/**************************
Sonya Youngblood
"Doll Boss Hunter"

Treehouse FSJS Techdegree
Project 4 - OOP Game App
***************************/
// Listening for "start game" button to be clicked
// Listening for interactive keyboard to be clicked



let game;

$("#btn__reset").on("click", function () {
    game = new Game();
    game.startGame();

});

$('#qwerty .key').on('click', function (event) {
    game.handleInteraction(event)

});

if (Event.className === 'key') {
    game.handleInteraction(e)
};


