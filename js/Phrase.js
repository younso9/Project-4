/**************************
Treehouse FSJS Techdegree
Project 4 - OOP Game App
Phrase.js Comments
***************************/


class Phrase {  //CREATING PHRASE CLASS 

    //Phrase class created to handle the creation of phrases.
    //Takes the phrase being held and converts to lowercase

    $phrase = $('#phrase ul');
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }

    //const game = new Game();
    //const randomPhrase = game.getRandomPhrase();
    //const phrase = new Phrase(randomPhrase.phrase);
    //phrase.addPhraseToDisplay();

    // addPhraseToDisplay() {
    //     for (let i = 0; i < this.phrase.length; i++) {
    //         if (this.phrase[i] !== ' ') {
    //             $('div#phrase.section').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`);
    //         } else {
    //             $('div#phrase.section').append(`<li class="hide space">&nbsp;</li>`);
    //         }
    //     }
    // }

    // METHOD WHICH ADDS LETTER PLACEHOLDERS (BOXES) TO THE GAMEBOARD AT THE START
    // Go through the phrase and create <li> tags holding each letter and space. (I used a for loop)
    // Use the "hide letter" class for letters and the "space" class for spaces
    // Append each character to the #phrase ul (See below for how it will look as per example_phrase_html)

    addPhraseToDisplay() {
        this.$phrase.empty();

        for (let i = 0; i < this.phrase.length; i++) {
            let letter = this.phrase[i];
            let $blockedLetter = $(`<li class = "hide letter ${letter}" > ${letter}</li>`);
            this.$phrase.append($blockedLetter);
        }
    }
}

    // checkLetter(userGuess) {
    //     for (let i = 0; i < this.phrase.length; i++) {
    //         let phraseElements = this.phrase[i];
    //         if (userGuess === phraseElements) {
    //             return (true);
    //         }
    //     }
    //     return (false);
    // };

//     showMatchedLetter(userGuess) {
//         // METHOD THAT REVEALS EACH LETTER ON THE BOARD THAT MATCHES THE PLAYER'S GUESS
//         // Remove the class of "hide" and add the class of "show"

//         let $letters = $('#phrase ul .' + userGuess);
//         $letters.removeClass('hide');
//         $letters.addClass('show');
//     }
// }



/*
 const letterElements = document.getElementsByClassName(letter);
        for (let i = 0; i < letterElements.length; i++) {
            letterElements[i].classList.add('show');
        }

    //METHOD THAT CHECKS EACH GUESSED LETTER TO SEE IF IT IS IN THE PHRASE
    // Go through the phrase and test if the guessed letter matches any letter in the phrase. (I used a for loop again)
/******************************************************************
        <div id="phrase" class="section">
            <ul>
                <li class="hide letter h">h</li>
                <li class="hide letter o">o</li>
                <li class="hide letter w">w</li>
                <li class="space"> </li>
                <li class="hide letter a">a</li>
                <li class="hide letter r">r</li>
                <li class="hide letter e">e</li>
                <li class="space"> </li>
                <li class="hide letter y">y</li>
                <li class="hide letter o">o</li>
                <li class="hide letter u">u</li>
            </ul>
        </div>
    *******************************************************************/



/*
$("#scoreboard > ol > li:nth-child(1)").show()

document.querySelector("#qwerty > div:nth-child(3) > button:nth-child(7)")

document.querySelector("#scoreboard > ol")
*/


