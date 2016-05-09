"use strict";
var Robot = (function(robotMaster) {
  robotMaster.Factory = {};
  robotMaster.Factory.Chassis = {};
  robotMaster.Factory.Weapon = {};
  robotMaster.Factory.Mods = {};

  robotMaster.Factory.Chassis = function () {
    this.type = 'empty';
    this.healthBonus = 0;
    this.armorBonus = 0;
    this.strengthBonus = 0;
    this.agilityBonus = 0;
  };
//** 6 Types of Chassis (base + variants) **//

  robotMaster.Factory.Chassis.Drone = function() {
    this.type = "Drone"
    this.healthBonus = this.healthBonus + 50;
    this.armorBonus = this.armorBonus + 5;
    this.strengthBonus = this.strengthBonus + 15;
    this.agilityBonus = this.agilityBonus + 30;
    };
  robotMaster.Factory.Chassis.Drone.prototype = new robotMaster.Factory.Chassis();
  
  robotMaster.Factory.Chassis.Drone.Light = function() {
    this.subType = "Light"
    this.healthBonus = this.healthBonus + 5;
    this.armorBonus = this.armorBonus + 0;
    this.strengthBonus = this.strengthBonus + 0;
    this.agilityBonus = this.agilityBonus + 15;
  };
  robotMaster.Factory.Chassis.Drone.Light.prototype = new robotMaster.Factory.Chassis.Drone();

  robotMaster.Factory.Chassis.Drone.Heavy = function() {
    this.subType = "Heavy"
    this.healthBonus = this.healthBonus + 20;
    this.armorBonus = this.armorBonus + 0;
    this.strengthBonus = this.strengthBonus + 5;
    this.agilityBonus = this.agilityBonus + 0;
  };
  robotMaster.Factory.Chassis.Drone.Heavy.prototype = new robotMaster.Factory.Chassis.Drone();

  robotMaster.Factory.Chassis.Bipedal = function() {
    this.type = "Bipedal"
    this.healthBonus = this.healthBonus + 10;
    this.armorBonus = this.armorBonus + 5;
    this.strengthBonus = this.strengthBonus + 15;
    this.agilityBonus = this.agilityBonus + 30; 
  };
  robotMaster.Factory.Chassis.Bipedal.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.Chassis.Bipedal.Light = function() {
    this.subType = "Light"
    this.healthBonus = this.healthBonus + 5;
    this.armorBonus = this.armorBonus + 5;
    this.strengthBonus = this.strengthBonus + 5;
    this.agilityBonus = this.agilityBonus + 10; 
  };
  robotMaster.Factory.Chassis.Bipedal.Light.prototype = new robotMaster.Factory.Chassis.Bipedal();

  robotMaster.Factory.Chassis.Bipedal.Heavy = function() {
    this.subType = "Heavy"
    this.healthBonus = this.healthBonus + 15;
    this.armorBonus = this.armorBonus + 10;
    this.strengthBonus = this.strengthBonus + 5;
    this.agilityBonus = this.agilityBonus + -5; 
  };
  robotMaster.Factory.Chassis.Bipedal.Heavy.prototype = new robotMaster.Factory.Chassis.Bipedal();

  robotMaster.Factory.Chassis.ATV = function() {
    this.type = "ATV"
    this.healthBonus = this.healthBonus + 10;
    this.armorBonus = this.armorBonus + 5;
    this.strengthBonus = this.strengthBonus + 15;
    this.agilityBonus = this.agilityBonus + -30;
  };
  robotMaster.Factory.Chassis.ATV.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.Chassis.ATV.Light = function() {
    this.subType = "Light"
    this.healthBonus = this.healthBonus + 0;
    this.armorBonus = this.armorBonus + 0;
    this.strengthBonus = this.strengthBonus + 5;
    this.agilityBonus = this.agilityBonus + 10;
  };
  robotMaster.Factory.Chassis.ATV.Light.prototype = new robotMaster.Factory.Chassis.ATV();

  robotMaster.Factory.Chassis.ATV.Heavy = function() {
    this.subType = "Heavy"
    this.healthBonus = this.healthBonus + 10;
    this.armorBonus = this.armorBonus + 10;
    this.strengthBonus = this.strengthBonus + 10;
    this.agilityBonus = this.agilityBonus + -30;
  };
  robotMaster.Factory.Chassis.ATV.Heavy.prototype = new robotMaster.Factory.Chassis.ATV();
//END Chassis Types//

return robotMaster;
})(Robot || {});