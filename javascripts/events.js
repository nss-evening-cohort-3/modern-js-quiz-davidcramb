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

$('#ready').on('click', Robot.buildP1())
// var readyP1 = document.getElementById('ready');

// function anotherfunction(){console.log('hi')}
// readyP1.addEventListener('click', Robot.buildP1, anotherfunction)


