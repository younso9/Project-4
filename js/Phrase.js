/**************************
Sonya Youngblood
"Doll Boss Hunter"

Treehouse FSJS Techdegree
Project 4 - OOP Game App
***************************/
//METHOD THAT CHECKS EACH GUESSED LETTER TO SEE IF IT IS IN THE PHRASE
// Goes through the phrase and tests if the guessed letter matches any letter in the phrase. 

class Phrase {  //CREATING PHRASE CLASS 

  
    $phrase = $('#phrase ul');
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();                         //converts selected phrase to lowercase

    }

    addPhraseToDisplay() {                                      //Displays random phrase on game board screen
        this.$phrase.empty();

        for (let i = 0; i < this.phrase.length; i++) {
            let letter = this.phrase[i];
            let blockedLetter = $(`<li class = "hide letter ${letter}" > ${letter}</li>`);
            this.$phrase.append(blockedLetter);
        }
    }



    checkLetter(userGuess) {                                    //checks each guessed letter for matches in phrase
        for (let i = 0; i < this.phrase.length; i++) {
            let phraseLetter = this.phrase[i];
            if (userGuess === phraseLetter) {
                return (true);
            }
        }
        return (false);
    };

    showMatchedLetter(userGuess) {                              //reveals matched letter on the game board
          
        let $letters = $('#phrase ul .' + userGuess);
        $letters.removeClass('hide');
        $letters.addClass('show');
    }

}
