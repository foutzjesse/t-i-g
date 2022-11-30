class OPlay {
  constructor(quarter, lead, clock, down, ballon, togo, formation, play, gain, result, carrier) {
    this.quarter = quarter;
    this.lead = lead; //difference between scores. can be negative.
    this.clock = clock;
    this.down = down;
    this.ballon = ballon;
    this.togo = togo;
    this.formation = formation;
    this.play = play;
    this.gain = gain; //can be negative.
    this.result = result;
    this.carrier = carrier;
  }
}

class Game {
  constructor(date, oplays) {
    this.date = date;
    this.oplays = oplays;
  }
}

class Year {
  constructor(year, games) {
    this.year = year;
    this.games = games;
  }
}