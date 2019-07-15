/**************************
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
Game.js Comments
***************************/


class Game {
    // Initializing a class definition
    // Created a Game Class  for starting and ending the game, handling interaction, getting a random phrase,
    // checking for a win and rmoving a life from the scoreboard.
    /*class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    } */
    // Track the number of missed guesses that is initially set to 0
    // Stored my array of phrases to be used within the game.  

    missedGuess = 5;

    constructor() {
        this.missed = 0;
        this.phrase =
            [
                new Phrase('Flawsome'),
                new Phrase('Shevolution'),
                new Phrase('Unaplolgetic'),
                new Phrase('Dollboss'),
                new Phrase('Youniversity')
            ];

        this.activePhrase = null;
    }

    startGame() {
        // METHOD THAT INITIALIZES GAME
        // Overlay disappears and game screen appears
        // Previous lives reset
        // Previous keyboard reset
        // Random phrase is retrieved (getRandomPhrase())
        // Phrase is displayed with objects hidden (addPhraseToDisplay())

        $('#overlay').fadeOut(4000);
        $('#qwerty .key').prop('disabled', false);
        $('#qwerty .key').removeClass('chosenLetter');
        $('#qwerty .key').removeClass('wrong');

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        let $crown = $("#scoreboard li img");
        $crown.attr("src", "images/crown.jpg");
        $crown.attr("alt", "Crown");
        $crown.show();
        this.missed = 0;
    }





    getRandomPhrase() {
        // METHOD THAT SELECTS A RANDOM PHRASE 
        // get a random number
        // use the random to select phrase from the array of phrases
        // return the chosen phrase


        const newPhrase = Math.floor(Math.random() * this.phrase.length);
        return (this.phrase[newPhrase]);

    }
}
// handleInteraction(e) {

//         let $letter = $(e.target).text();
//         $(e.target).prop('disabled', true);

//         if (this.activePhrase.checkLetter($letter)) {
//             this.activePhrase.showMatchedLetter($letter);
//             $(e.target).addClass('chosen');
  
//         } else {
//             this.removeLife();
//             $(e.target).addClass('wrong');
//         }

//         if (this.checkForWin()) {
//             this.gameOver();
//     };


//         // METHOD THAT CONTROLS MOST OF THE GAME LOGIC
//         // checks for the letter in the chosen phrase via the checkLetter method in Phrase.js
//         // If user clicks on screen keyboard...
//         // Store the value of what the user cliked

//         // Disable whichever letter the user chose (Can't be chosen again)

//         // If the chosen letter matches a letter in the phrase (checkLetter())...
//         // Give it the "chosen" class (Highlights the letter in whatever color you choose... Css or JS)
//         // Show the matched letter: Un-hides the letter object (showMatchedLetter())
//         // If the user has won (checkForWin()) ...
//         // Ends game (gameOver())

//         // Otherwise/else (letter does NOT match)...
//         // Give it the "wrong" class (Highlights the letter in whatever color you choose... Css or JS)
//         // Remove 1 life


//     };

//     removeLife() {
//         // METHOD THAT REMOVES LIFE FROM SCOREBOARD WHEN CALLED
//         // Storing all the "lives" (The crown icons)
//         // Points to which crown based on how many misses 
//         // Remove a crown image replace with tilted "lost" crown image
//         // Missed guesses is incremented by 1
//         // If missed guesses is the maximum amount...
//         // Ends game(gameOver())

//         this.missed = this.missed + 1;
//         const lostCrown = 'images/tiltcrown.jpg';

//         const $crowns = $ ('#scoreboard li:not (.lost)').last();
//         const $crownsImg = $crowns.find('img');
//         $crownsImg.attr('src', tiltCrown);
//         $crowns.addClass('lost');
            
//         if (this.missed === 5) {
//             this.gameOver(false)
//         }    

//   };            
        

// /*
//         let $removeCrown = $crowns.eq(this.missed);

//         let $replaceIMG = $removeCrown.children().first();
//         $replaceIMG.attr("src", tiltCrown);
//         $replaceIMG.attr("alt", "Tilted Crown");
//         $replaceIMG.removeClass("tries");
//         $replaceIMG.addClass("lost");

// */        
        
  

// checkForWin() {
//     // METHOD THAT CHECKS IF USER HAS WON
//     // Check if there are no more hidden letters in the phrase object, return true or false
            
//     if ($('.hide').length > 0) {
//         return false;
//     } else {
//         return true;
//     }
//  }
       
// gameOver() {
    
//     // METHOD THAT ENDS GAME AND DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
//     // Leaves game screen and goes back to overlay
//     // If user has max misses, they lose and...
//     //Display losing message
//     // Gives overlay losing class name and styles
//     // Otherwise/else...
//     // Display winning message
//     // Gives overlay winning class name and styles (Star Wars Victory pic)

//     const $startScreen = $('#overlay');
//     $startScreen.show();

//     if (this.checkForWin()) {
//         $('#game-over- message').text("You're A DollBoss!");
//         $startScreen.removeClass = ('start');
//         $startScreen.addClass('win');
//     } else {
//         $('#game-over- message').text(`Ooopsies! You Almost Doll Boss'd! "${this.activePhrase.phrase}" Gets the Crown!`);
//         $startScreen.removeClass ('start');
//         $startScreen.addClass('lose');
//     }

//     }

// }        

 /* 

            new Phrase('Believe in You'),
            new Phrase('Happily You'),
            new Phrase('Change Your Narrative'),
            new Phrase('The Doll Boss'),
            new Phrase('You are awesome')





    this.resetGame(); 
    const showCount = document.querySelectorAll('.show').length;
    
  $('#game-over-message');
            let resetButton = document.querySelector('#btn_reset');
            let overlay = document.querySelector('#overlay');
            overylay.style.display = '';

        const $removeCrown = $removeCrown.children().first();
        let
        const tiltCrown

    document.getElementsByClassName('tries')[0].remove();
        console.log(letterInPhrase);

        if (letterInPhrase) {
            this.activePhrase.showMatchedLetter(letter);

            this.checkForWin();

        } else {

            if (event instanceof KeyboardEvent) {

                const buttonElements = document.querySelectorAll('.key');
                let targetLetter;

                for (let i = 0; i < buttonElements.length; i++) {

                    if buttonElements[i].textContent === letter) {
                        targetLetter = buttonElements[i];
                    }

                }
                targetLetter.classList.add('wrong');

            } else {
                event.target.classList.add('wrong');
            }

            this.removeLife();
        }

    }

*/