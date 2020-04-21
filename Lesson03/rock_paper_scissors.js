const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
const TRANSLATION = require('./rps_translation.json');
var LANGUAGE = 'en';
const VALID_ANSWERS = ['y', 'n', 'yes', 'no'];
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const LANG_ENGLISH = '1';
const LANG_SPANISH = '2';
const VALID_LANGUAGES = [LANG_ENGLISH, LANG_SPANISH];
/*
   If player a chooses rock and player b chooses scissors, player a wins.
   If player a chooses paper and player b chooses rock, player a wins.
   If player a chooses scissors and player b chooses paper, player a wins.
   If both players choose the same item, neither player wins. It's a tie.
   The user makes a choice.
   The computer makes a choice.
   The winner is displayed.


   FORMAL PSEUDOCODE
   START
   Setup GAME LOGIC
     rock breaks scissors and kills lizard
     paper covers rock and Spock
     scissors cut paper and lizard
     lizard eats paper and Spock
     Spock deflects rock and scissors
   Setup helper functions
     SUBPROCESS translate word
     SUBPROCESS pair message with language
     SUBPROCESS output message in requested language after appending "=> "
     SUBPROCESS to determine winner
   GET language to use for user interface
   SET language to use for user interface
   Display Welcome Message
   WHILE (true)
   {
     SET variable for output
     GET user choice of rock, paper, scissors, lizard, Spock
     SET computer's choice
       Generate random number between 0 and 1
         Math.random()
       Multiply random number by number of choices to use as index
         randomIndex = Math.floor(Math.random() * VALID_CHOICES.length)
       Use index into array of valid choices to get computer's choice
         computerChoice = VALID_CHOICES[randomIndex]
     SET game winner to tie by default
     Call SUBPROCESS to determine winner
     Build output
       READ game winner
     PRINT output
     GET would user like to play again
     IF (no) break ELSE while loop continues
   }
   Display Goodbye Message
   END
*/


// ==== ===== ==== ==== //
// START


// Setup GAME LOGIC
// rock breaks scissors and kills lizard
// paper covers rock and Spock
// scissors cut paper and lizard
// lizard eats paper and Spock
// Spock deflects rock and scissors
const WINS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:   ['paper', 'spock'],
  spock:    ['rock', 'scissors'],
};


// SUBPROCESS translate word
// Helper function: translateWord //
// Input: A string 'word' //
// Output: relevant language and translated word //
// default translation is from Spanish to English //
function translateWord(word, fromLang = 'es', toLang = 'en') {
  let translateType = `${fromLang}_to_${toLang}`;
  return TRANSLATION[translateType][word];
}


// SUBPROCESS pair message with language
// Helper function: messages //
// Input: A string 'message' //
// Output: relevant language and message //
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}


// SUBPROCESS output message in requested language after appending "=> "
// Helper function: prompt //
// add a prompt in front of input
// Input: A message 'key' //
// Output: Log to console correct 'message' from json in  //
//         language specified and pre-pended by "=> " //
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}


// SUBPROCESS determine winner
function determinWinner(user, computer) {
  return WINS[user].includes(computer);
}


// GET language for user interface
// Ask user which language to use //
// Ask same in Spanish //
// Show valid answer choices in English //
// Show same in Spanish //
// while-loop till user answers with a number //
prompt('language');
console.log("=> " + messages('language', 'es'));
let language = readline.question();
while (!VALID_LANGUAGES.includes(language)) {
  prompt('user input');
  console.log(`${language}`);
  prompt('language');
  console.log("=> " + messages('language', 'es'));
  language = readline.question();
}


// SET language for user interface
// If 1, English, if 2, Spanish, default, English
// switch used to enable future expansion of languages
switch (language) {
  case '1':
    LANGUAGE = 'en';
    break;
  case '2':
    LANGUAGE = 'es';
    break;
  default:
    LANGUAGE = 'en';
    break;
}


// Welcome message
prompt('welcome');


// MAIN GAME CODE //
// while loop is used to encapsulate the entire game code //
// in case user wants to perform additional calculations  //
while (true) {
  // GET user choice of rock, paper, scissors, lizard, Spock
  prompt('user rps choice');
  let choice = readline.question().toLowerCase();
  let userChoice = translateWord(choice, LANGUAGE, "en");
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt('user input');
    console.log(`${choice}`);
    prompt('not valid choice');
    prompt('user rps choice');
    choice = readline.question().toLowerCase();
    userChoice = translateWord(choice, LANGUAGE, "en");
  }


  // SET computer's choice
  // Generate random number between 0 and 1
  // Multiply random number by number of choices to use as index
  // Use index into array of valid choices to get computer's choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];


  // SET game winner to tie by default
  let gameWinner = messages('result tie', LANGUAGE); // default result is a tie

  // Call SUBPROCESS to check if user wins
  if (userChoice !== computerChoice) {
    let userWins = determinWinner(userChoice, computerChoice);
    if (userWins) {
      // console.log("player wins");
      gameWinner = messages('result user wins', LANGUAGE);
    } else {
      // console.log("computer wins");
      gameWinner = messages('result computer wins', LANGUAGE);
    }
  }


  // Build output
  //   READ user's choice
  //   READ computer's choice
  //   READ game winner
  // PRINT output
  // console.log(`You chose ${userChoice}, the computer chose
  //  {computerChoice}.`);
  prompt('your choice');
  console.log(`${choice}`);
  prompt('computer choice');
  console.log(`${translateWord(computerChoice, "en", LANGUAGE)}`);
  console.log(gameWinner);


  // GET would user like to play again
  // IF (no) break ELSE while loop continues to play game
  prompt('continue');
  let anotherGame = readline.question().toLowerCase();
  while (!VALID_ANSWERS.includes(anotherGame)) {
    prompt('user input');
    console.log(`${anotherGame}`);
    prompt('valid answers');
    anotherGame = readline.question().toLowerCase();
  }
  if (anotherGame.charAt(0) === 'n') break;
}


// Display Goodbye Message
prompt('adieu');

// END
/* ==== ==== ==== ==== */