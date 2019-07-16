/**************************
Sonya Youngblood
"Doll Boss Hunter"

Treehouse FSJS Techdegree
Project 4 - OOP Game App
***************************/

// Initializing a class definition
// Game Class created for starting and ending the game, handling interaction, getting a random phrase,
// checking for a win and removing a life from the scoreboard.


class Game {
    totalMissed = 5;
    constructor() {
        this.missed = 0;
        this.phrase = [                                     //array of phrases to be used within the game.
            new Phrase('Flawsome'),
            new Phrase('Shevolution'),
            new Phrase('Unapologetic'),
            new Phrase('Unicorn'),
            new Phrase('Youniversity')
        ];
        this.activePhrase = null;                           //sets iniatial phrase to "null".
    }

    startGame() {                                           //method used to start game
        $('#overlay').fadeOut(2000);
        $('#overlay').removeClass('win');
        $('#overlay').removeClass('lose');                  //fades out overlay
        $("#qwerty .key").prop('disabled', false);          //resets keyboard
        $("#qwerty .key").removeClass('chosen');
        $("#qwerty .key").removeClass('wrong');

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        //resets crowns from previous play
        let $crown = $("#scoreboard li img");
        $crown.attr("src", "images/crown.png");
        $crown.attr("alt", "Crown Icon");
        $crown.removeClass("lost");

        $crown.show();
        this.missed = 0;
    }

    getRandomPhrase() {                                     //gets a random number from the phrase within the phrase array
        let newPhrase = Math.floor(Math.random() * this.phrase.length);
        return (this.phrase[newPhrase]);
    }

    handleInteraction(e) {                                  //handles onscreen keyboard button clicks


        let $letter = $(e.target).text();
        $(e.target).prop('disabled', true);                 //will disable chosen letters
        if (this.activePhrase.checkLetter($letter)) {
            this.activePhrase.showMatchedLetter($letter);
            $(e.target).addClass('chosen');

        } else {
            this.removeLife();                              //will remove a life if chosen letter is not within the phrase
            $(e.target).addClass('wrong');
        }
        if (this.checkForWin()) {                           //check if player has won the game, show win screen
            this.gameOver();
        }
    };

    removeLife() {                                          //Removes a crown from the scoreboard if missed & replace with tilted crown
        this.missed = this.missed + 1;
        const tiltcrown = "images/tiltcrown.png";

        const $lives = $("#scoreboard li");
        let $removeLife = $lives.eq(this.missed - 1);
        let $replaceIMG = $removeLife.children().first();
        $replaceIMG.attr("src", tiltcrown);
        $replaceIMG.attr("alt", " Tilted Crown");
        $replaceIMG.removeClass("tries");
        $replaceIMG.addClass("lost");


        if (this.missed >= 5) {
            this.gameOver(false);
        }
    };

    checkForWin() {                                     //check for letter in phrase if tue show on screen, if false remove crown
        if ($('.hide').length > 0) {
            return false;
        } else {
            return true;
        }
    }

    gameOver() {                                        //Displays a win or loss screen win the game is over
        const $startScreen = $('#overlay');
        $startScreen.show();
        if (this.checkForWin()) {
            $('#game-over-message').text("Congratulations! You're A DollBoss!");
            $startScreen.removeClass('start');
            $startScreen.addClass('win');
        } else {
            $('#game-over-message').text(`Sorry, try again. The correct phrase was "${this.activePhrase.phrase}".`);
            $startScreen.removeClass('start');
            $startScreen.addClass('lose');
        }
    }
}