class Player {
  constructor(id, name, number, gradclass, positions) {
    this.id = id;
    this.name = name;
    this.number = number;
    this.gradclass = gradclass;
    this.positions = positions;
  }
}

class OPlay {
  constructor(quarter, lead, clock, down, ballon, togo, formation, play, gain, result, carrier) {
    this.quarter = quarter;
    this.lead = lead; //difference between scores. can be negative.
    this.clock = clock;
    this.down = down;
    this.ballon = ballon; //distinguish between own and opponent's
    this.togo = togo;
    this.formation = formation;
    this.play = play;
    this.gain = gain; //can be negative.
    this.result = result;
    this.carrier = carrier; //Player
  }
}

class Game {
  constructor(date, result, oplays) {
    this.date = date;
    this.result = result;
    this.oplays = oplays;
  }
}

class Year {
  constructor(year, games) {
    this.year = year;
    this.games = games;
  }
}

class Team {
  constructor(coach, years){
    this.coach = coach;
    this.years = years;
  }
}