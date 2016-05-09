"use strict";
var Robot = (function(robotMaster) {
  robotMaster.Factory = {};
  robotMaster.Factory.Chassis = {};
  robotMaster.Factory.Weapon = {};
  robotMaster.Factory.Mods = {};

  robotMaster.Factory.Chassis = function () {
    this.type = 'empty';
    this.hpBonus = 0;
    this.armorBonus = 0;
    this.strengthBonus = 0;
    this.agilityBonus = 0;
  };
//** 6 Types of Chassis (base + variants) **//

  robotMaster.Factory.Chassis.Drone = function() {
    this.type = "Drone"
    this.hpBonus = 10;
    this.armorBonus = 5;
    this.strengthBonus = 15;
    this.agilityBonus = 30;
    };
  robotMaster.Factory.Chassis.Drone.prototype = new robotMaster.Factory.Chassis();
  
  robotMaster.Factory.Chassis.Drone.Light = function() {
    this.subType = "Light"
    this.hpBonus = 5;
    this.armorBonus = 0;
    this.strengthBonus = 0;
    this.agilityBonus = 15;
  };
  robotMaster.Factory.Chassis.Drone.Light.prototype = new robotMaster.Factory.Chassis.Drone();

  robotMaster.Factory.Chassis.Drone.Heavy = function() {
    this.subType = "Heavy"
    this.hpBonus = 20;
    this.armorBonus = 0;
    this.strengthBonus = 5;
    this.agilityBonus = 0;
  };
  robotMaster.Factory.Chassis.Drone.Heavy.prototype = new robotMaster.Factory.Chassis.Drone();

  robotMaster.Factory.Chassis.Bipedal = function() {
    this.type = "Bipedal"
    this.hpBonus = 10;
    this.armorBonus = 5;
    this.strengthBonus = 15;
    this.agilityBonus = 30; 
  };
  robotMaster.Factory.Chassis.Bipedal.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.Chassis.Bipedal.Light = function() {
    this.subType = "Light"
    this.hpBonus = 5;
    this.armorBonus = 5;
    this.strengthBonus = 5;
    this.agilityBonus = 10; 
  };
  robotMaster.Factory.Chassis.Bipedal.Light.prototype = new robotMaster.Factory.Chassis.Bipedal();

  robotMaster.Factory.Chassis.Bipedal.Heavy = function() {
    this.subType = "Heavy"
    this.hpBonus = 15;
    this.armorBonus = 10;
    this.strengthBonus = 5;
    this.agilityBonus = -5; 
  };
  robotMaster.Factory.Chassis.Bipedal.Heavy.prototype = new robotMaster.Factory.Chassis.Bipedal();

  robotMaster.Factory.Chassis.ATV = function() {
    this.type = "ATV"
    this.hpBonus = 10;
    this.armorBonus = 5;
    this.strengthBonus = 15;
    this.agilityBonus = -30;
  };
  robotMaster.Factory.Chassis.ATV.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.Chassis.ATV.Light = function() {
    this.subType = "Light"
    this.hpBonus = 0;
    this.armorBonus = 0;
    this.strengthBonus = 5;
    this.agilityBonus = 10;
  };
  robotMaster.Factory.Chassis.ATV.Light.prototype = new robotMaster.Factory.Chassis.ATV();

  robotMaster.Factory.Chassis.ATV.Heavy = function() {
    this.subType = "Heavy"
    this.hpBonus = 10;
    this.armorBonus = 10;
    this.strengthBonus = 10;
    this.agilityBonus = -30;
  };
  robotMaster.Factory.Chassis.ATV.Heavy.prototype = new robotMaster.Factory.Chassis.ATV();
//END Chassis Types//

return robotMaster;
})(Robot || {});