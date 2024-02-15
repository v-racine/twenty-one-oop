//1. Description:

/*
Twenty-One is a card game with a dealer and a player.
  -The participants try to get as close to 21 points as possible without going over.
  -The game starts by dealing cards from a 52-card deck consisting of cards from 4 suits of 13 ranks each.
  -Both participants receive two cards.
    -The dealer hides one of his cards (places it face-down) so that the player can't see what it is.
    -The player can see both of her cards.

The player takes the first turn, and can hit or stay.
  -If the player hits, she gets another card, and again has the opportunity to hit (get another card) or stay.
  -If the player goes over 21 points, she busts.
  -If the player stays, the dealer plays next.

If the player doesn't bust, the dealer takes a turn.
  -The dealer reveals his face-down card.
  -If the dealer's total points are less than 17, he must hit and receive another card.
  -If the dealer goes over 21 points, he busts.
  -If the dealer has 17 points or more, he must stay.

  Results of the game are determined.


The `player` is a human running the program.
The `dealer` is the computer.  
*/

//2. Nouns & Verbs:

/*
NOUNS:
  -game, participant, player, dealer, turn, deck, card, suit, rank, score, points 

VERBS:
  -start, deal, hit, stay, bust, win, lose, tie, 
*/

//3. Organize:

/*
Game
  -start

Deck
  -deal(?)

Card
Participant

Player
  -hit
  -stay
  -bust
  -Score(n)

Dealer 
  -hit 
  -stay 
  -deal(?)
  -bust
  -Score(n)
*/

//4. Added Requirements:

/*
-Greetings feature: Welcome the player to the game, and say good bye when they quit.

Each time the player has an opportunity to hit or stay:
  -Display the computer's hand; one card should remain hidden.
  -Display the player's hand and her point total.

For the dealer's turn:
  -The dealer doesn't play at all if the player busts.
  -Display the dealer's hand, including the hidden card, and report his point total.
  -Redisplay the dealer's hand and point total and each time he hits.
  -Display the results when the dealer stays.

-PlayAgain feature: After each game is over, ask the player if they want to play again. 
Start a new game if they say yes, else end the game.

-Bank feature: When the program starts, give the player 5 dollars with which to bet. 
Deduct 1 dollar each time she loses, and add 1 dollar each time she wins. The program 
should quit when she is broke (0 dollars) or rich (has a total of 10 dollars).
*/

//CODE:
let readline = require("readline-sync");

class Card {
  constructor() {
    //STUB
    //states to add: rank? suit? points?
  }
}

class Deck {
  constructor() {
    //STUB
    //states: 52 cards? in an array or object?
  }

  deal() {
    //STUB
    //this might move to the dealer class 
  }
}

class Participant {
  constructor() {
    //STUB
    //states to add? score? hand? amount of money?
  }

}

class Player extends Participant {
  constructor() {
    //STUB
    //states to add? score? hand? amount of money?
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }
}

class Dealer extends Participant {
  constructor() {
    //STUB
    //states to add? score? hand? deck of cards?
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }

  hide() {
    //STUB  
  }

  reveal() {
    //STUB
  }

  deal() {
    //STUB
    //this might move to the deck class 
  }
}

//Orchestration Engine:

class TwentyOneGame {
  constructor() {
    //STUB
    //states to add? deck? participants?
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    //STUB
  }

  showCards() {
    //STUB
  }

  playerTurn() {
    //STUB
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    //STUB
  }

  displayGoodbyeMessage() {
    //STUB
  }

  displayResult() {
    //STUB
  }

}

let game = new TwentyOneGame();
game.start();