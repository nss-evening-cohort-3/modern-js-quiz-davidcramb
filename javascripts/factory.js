"use strict";
var Robot = (function(robotMaster) {
  robotMaster.Factory = {};
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

  robotMaster.Factory.Drone = function() {
    this.type = "Drone"
    this.hpBonus = 10;
    this.armorBonus = 5;
    this.strengthBonus = 15;
    this.agilityBonus = 30;

    };
  robotMaster.Factory.Drone.prototype = new robotMaster.Factory.Chassis();


  
  robotMaster.Factory.Drone.Light = function() {
    this.subType = "Light"
    this.hpBonus = 5;
    this.armorBonus = 0;
    this.strengthBonus = 0;
    this.agilityBonus = 15;
  };
  robotMaster.Factory.Drone.Light.prototype = new robotMaster.Factory.Drone();

  robotMaster.Factory.Drone.Heavy = function() {
    this.subType = "Heavy"
    this.hpBonus = 20;
    this.armorBonus = 0;
    this.strengthBonus = 5;
    this.agilityBonus = 0;
  };
  robotMaster.Factory.Drone.Heavy.prototype = new robotMaster.Factory.Drone();

  robotMaster.Factory.Bipedal = function() {
    this.type = "Bipedal"
    this.hpBonus = 10;
    this.armorBonus = 5;
    this.strengthBonus = 15;
    this.agilityBonus = 30; 
  };
  robotMaster.Factory.Bipedal.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.Bipedal.Light = function() {
    this.subType = "Light"
    this.hpBonus = 5;
    this.armorBonus = 5;
    this.strengthBonus = 5;
    this.agilityBonus = 10; 
  };
  robotMaster.Factory.Bipedal.Light.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.Bipedal.Heavy = function() {
    this.subType = "Heavy"
    this.hpBonus = 15;
    this.armorBonus = 10;
    this.strengthBonus = 5;
    this.agilityBonus = -5; 
  };
  robotMaster.Factory.Bipedal.Heavy.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.ATV = function() {
    this.type = "ATV"
    this.hpBonus = 10;
    this.armorBonus = 5;
    this.strengthBonus = 15;
    this.agilityBonus = -30;
  };
  robotMaster.Factory.ATV.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.ATV.Light = function() {
    this.subType = "Light"
    this.hpBonus = 0;
    this.armorBonus = 0;
    this.strengthBonus = 5;
    this.agilityBonus = 10;
  };
  robotMaster.Factory.ATV.Light.prototype = new robotMaster.Factory.Chassis();

  robotMaster.Factory.ATV.Heavy = function() {
    this.subType = "Heavy"
    this.hpBonus = 10;
    this.armorBonus = 10;
    this.strengthBonus = 10;
    this.agilityBonus = -30;
  };
  robotMaster.Factory.ATV.Heavy.prototype = new robotMaster.Factory.Chassis();
//END Chassis Types//

//Weapons//
  robotMaster.Factory.Weapon = function() {
    this.name = "Bare Metal";
    this.strengthBonus = 0;
    this.agilityBonus = 0;
  };
robotMaster.Factory.Weapon.prototype = new robotMaster.Factory.Weapon();

  robotMaster.Factory.Weapon.Megabuster = function() {
    this.name = "Mega Buster";
    this.strengthBonus = 5;
    this.agilityBonus = 10;
  };
  robotMaster.Factory.Weapon.Megabuster.prototype = new robotMaster.Factory.Weapon();

  robotMaster.Factory.Weapon.BubbleLead = function() {
    this.name = "Bubble Lead";
    this.strengthBonus = 0;
    this.agilityBonus = 10;
  };
  robotMaster.Factory.Weapon.BubbleLead.prototype = new robotMaster.Factory.Weapon();

  robotMaster.Factory.Weapon.VulcanCannon = function() {
    this.name = "Vulcan Cannon";
    this.strengthBonus = 10;
    this.agilityBonus = 5;
  };
  robotMaster.Factory.Weapon.VulcanCannon.prototype = new robotMaster.Factory.Weapon();

  robotMaster.Factory.Weapon.MetalCrusher = function() {
    this.name = "Metal Crusher";
    this.strengthBonus = 15;
    this.agilityBonus = -5;
  };
  robotMaster.Factory.Weapon.MetalCrusher.prototype = new robotMaster.Factory.Weapon();

  robotMaster.Factory.Weapon.SparkSplasher = function() {
    this.name = "Spark Splasher";
    this.strengthBonus = 10;
    this.agilityBonus = 5;
  };
  robotMaster.Factory.Weapon.SparkSplasher.prototype = new robotMaster.Factory.Weapon();

  robotMaster.Factory.Weapon.IronOxide = function() {
    this.name = "Iron Oxide";
    this.strengthBonus = 15;
    this.agilityBonus = -5;
    this.armorBonus = -10;
  };
  robotMaster.Factory.Weapon.IronOxide.prototype = new robotMaster.Factory.Weapon();
//END Weapons

//Modifications
  robotMaster.Factory.Mods = function () {
    this.name = "empty modification slot";
  };

  robotMaster.Factory.Mods.FrontArmorPlating = function () {
    this.name = "Front Armor Plating";
    this.strengthBonus = 0;
    this.agilityBonus = 0;
    this.armorBonus = 10;
  };
  robotMaster.Factory.Mods.FrontArmorPlating.prototype = new robotMaster.Factory.Mods();

  robotMaster.Factory.Mods.RearArmorPlating = function () {
    this.name = "Rear Armor Plating";
    this.strengthBonus = 0;
    this.agilityBonus = 5;
    this.armorBonus = 5;
  };
  robotMaster.Factory.Mods.RearArmorPlating.prototype = new robotMaster.Factory.Mods();

  robotMaster.Factory.Mods.Boosters = function () {
    this.name = "Boosters";
    this.strengthBonus = 0;
    this.agilityBonus = 10;
    this.armorBonus = 0;
  };
  robotMaster.Factory.Mods.Boosters.prototype = new robotMaster.Factory.Mods();

  robotMaster.Factory.Mods.FuelAdditive = function () {
    this.name = "Fuel Additive";
    this.strengthBonus = 2;
    this.agilityBonus = 5;
    this.armorBonus = 0;
  };
  robotMaster.Factory.Mods.FuelAdditive.prototype = new robotMaster.Factory.Mods();

  robotMaster.Factory.Mods.AimingModule = function () {
    this.name = "Aim Enhancing Module";
    this.strengthBonus = 5;
    this.agilityBonus = 0;
    this.armorBonus = 2;
  };
  robotMaster.Factory.Mods.AimingModule.prototype = new robotMaster.Factory.Mods();

  robotMaster.Factory.Mods.PrototypeAmmo = function () {
    this.name = "Prototype Ammo";
    this.strengthBonus = 10;
    this.agilityBonus = -5;
    this.armorBonus = -5;
  };
  robotMaster.Factory.Mods.PrototypeAmmo.prototype = new robotMaster.Factory.Mods();

return robotMaster;
})(Robot || {});