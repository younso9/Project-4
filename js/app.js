/**************************
Treehouse FSJS Techdegree
Project 4 - OOP Game App
app.js Comments
***************************/
//$('#overlay').remove();

let game;
console.log("hello1");

$("#btn__reset").click(function () {
    game = new Game();
    game.startGame();
    console.log("hello");
});

$('#qwerty.key').on('click', function (event) {
    game.handleInteraction(event)
});

if (Event.className === 'key') {
    game.handleInteraction(e)
};


$('#overlay').click(function () {
    $('#overlay').remove();
});


/*

// Listening for "start game" button to be clicked

// Listening for interactive keyboard to be clicked

// Listening for physical keyboard to be pressed (For Exceeds only)
//document.getElementById



*/

//  document.getElementById('qwerty').addEventListener('click', function (_event) {
//  const e = event.target;
//  let event = Event; recoded at later date






/*
const game = new Game();
const overlay = document.querySelector('#overlay');
const resetButton = document.querySelector('#btn_reset');
const qwerty = document.getElementById('qwerty');
const qwertyButtons = document.querySelectorAll('#querty button');
const resetDisplay = () => {
    overlay.className = 'start';
    overlay.style.display = 'none'

};

const markButton = (button) => {
    button.disabled = true;
    game.handleInteraction(button);
};
resetButton.addEventListener('click', () => {
    resetDisplay();

    game.startGame();

});

qwerty.addEventListener('click', (event) => {
    if (event.target.className === 'key') {
        markButton(event.target);
    }
})










game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
*/