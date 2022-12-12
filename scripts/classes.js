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
  constructor(quarter, lead, clockmin, clocksec, down, ballon, togo, formation, play, gain, result, carrier) {
    this.quarter = quarter;
    this.lead = lead; //difference between scores. can be negative.
    this.clockmin = clockmin;
    this.clocksec = clocksec;
    this.down = down;
    this.ballon = ballon; //yards to GL
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