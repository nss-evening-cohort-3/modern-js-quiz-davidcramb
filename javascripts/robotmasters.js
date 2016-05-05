"use strict";
var Robot = (function(robotMaster) {
  robotMaster.Bosses = {};

  robotMaster.Bosses.Combatant = function() {
    this.chassis = null;
    this.weapon = null;
    this.health = null;
    this.name = "bubbleman";
    };

  robotMaster.Bosses.P1 = function() {
    this.name = "Player 1";
  };
    robotMaster.Bosses.P1.prototype = new robotMaster.Bosses.Combatant();

  robotMaster.Bosses.P2 = function() {
    this.name = "Player 2";
  };
    robotMaster.Bosses.P2.prototype = new robotMaster.Bosses.Combatant();


  return robotMaster;
})(Robot || {});