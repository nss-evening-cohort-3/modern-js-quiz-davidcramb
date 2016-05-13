"use strict";


var Robot = (function(robotMaster) {
  robotMaster.Bosses = {};

  robotMaster.Bosses.Combatant = function() {
    this.chassis = null;
    this.subtype = null;
    this.weapon = null;
    this.health = 0;
    this.name = "bubbleman";
    };

  robotMaster.Bosses.P1 = function() {
    this.name = "Player 1";
    this.health = 50;
    this.strength = 10;
    this.agility = 10;
    this.armor = 10;
  };

  robotMaster.Bosses.P1.prototype.setChassis = function(chassisSelect) {
    this.chassis = chassisSelect;
  };
  robotMaster.Bosses.P1.prototype.setWeapon = function(weaponSelect) {
    this.weapon = weaponSelect;
  };
  robotMaster.Bosses.P1.prototype.setMod = function(modSelect) {
    this.mod = modSelect;
  };

  robotMaster.Bosses.P2 = function() {
    this.name = "Player 2";
    this.health = 50;
    this.strength = 10;
    this.agility = 10;
    this.armor = 10;
  };

  robotMaster.Bosses.P2.prototype.setChassis = function(chassisSelect) {
    this.chassis = chassisSelect;
  };
  robotMaster.Bosses.P2.prototype.setWeapon = function(weaponSelect) {
    this.weapon = weaponSelect;
  };
  robotMaster.Bosses.P2.prototype.setMod = function(modSelect) {
    this.mod = modSelect
  };




  return robotMaster;
})(Robot || {});