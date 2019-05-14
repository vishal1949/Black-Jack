const SUITS = {
  0: '❤️',
  1: '💎',
  2: '☘️',
  3: '♤'
}

const FACECARDS = {
  1: 'A',
  11: 'J',
  12: 'Q',
  13: 'K'
}


class Deck {
  constructor(){
    this.deck = []
    this.populate();
  }

  populate(){
    for(let i = 0; i < 4; i++){
      for(let j = 1; j < 14; j++){
        if(Object.keys(FACECARDS).includes(`${j}`)){
          this.deck.push(FACECARDS[j] + SUITS[i]);
        }
        else{
          this.deck.push(j + SUITS[i]);
        }
      }
    }
  }
}

let d = new Deck();