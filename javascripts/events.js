"use strict";

let chassisID = "";
let weaponID = "";
let modID = "";

var Robot =(function(robotMaster){
  
  robotMaster.chassisClick = function() {
    let selection = $('.select-chassis').children();
    selection.each(function(index, selection){
      selection.addEventListener('click', robotMaster.getChassisID) 
    });
  };

  robotMaster.weaponClick = function(weapon) {
    let selection = $('.select-weapon').children();
    selection.each(function(index, selection){
      selection.addEventListener('click', robotMaster.getWeaponID)
    });
  };

  robotMaster.modClick = function(mod) {
    let selection = $('.select-mod').children();
    selection.each(function(index, selection){
      selection.addEventListener('click', robotMaster.getModID)
    });
  };
  robotMaster.getChassisID = function() {
    chassisID = this.className;
    console.log(chassisID)
  };
  robotMaster.getWeaponID = function() {
    weaponID = this.className;
    console.log(weaponID)
  };
  robotMaster.getModID = function() {
    modID = this.className;
    console.log(modID)
  };

return robotMaster;
})(Robot || {})

// $('#ready').on('click', Robot.buildP1())
var readyP1 = document.getElementById('readyP1');
var readyP2 = document.getElementById('readyP2');


readyP1.addEventListener('click', Robot.buildP1);
readyP1.addEventListener('click', function() {
  P1.health += P1.chassis.healthBonus;
  P1.strength += P1.chassis.strengthBonus;
  P1.agility += P1.chassis.agilityBonus;
  P1.armor += P1.chassis.armorBonus;
});

readyP2.addEventListener('click', Robot.buildP2);
readyP2.addEventListener('click', function() {
  P2.health += P2.chassis.healthBonus;
  P2.strength += P2.chassis.strengthBonus;
  P2.agility += P2.chassis.agilityBonus;
  P2.armor += P2.chassis.armorBonus;
});

readyP2.addEventListener('click', function() {
  $('#player_setup').hide();
  $('#battleground').show();

});

//test delete this
var showBG = function() {
  $('#battleground').show();
}

