"use strict";
$(document).ready(function(){
let getChassis = () => {
  for (let i = 0; i < Object.keys(Robot.Factory.Chassis).length; i++) {
    let chassisType = Object.keys(Robot.Factory.Chassis)[i];
    $('.select-chassis').append(`<span id=${chassisType}${i} class="${chassisType}"><a href="#" class="btn">${chassisType}</a></span>`);
  }
};

let getSubtypes = () => {
  $('.select-chassisSubtype').append(`<span id="Light"><a href="#" class="btn">Light</a></span`)
  $('.select-chassisSubtype').append(`<span id="Heavy"><a href="#" class="btn">Heavy</a></span`)
}

let getWeapons = () => {
  Object.keys(Robot.Weapon).forEach(function(weapon) {
    $('.select-weapon').append(`<span class=${weapon}><a href="#" class="btn">${weapon}</a></span>`);
  });
};

let getMods = () => {
  Object.keys(Robot.Mods).forEach(function(mod) {
    $('.select-mod').append(`<span class=${mod}><a href="#" class="btn">${mod}</a></span>`);

  })
};

let buildP1Chassis = (e) => {
  let P1Chassis = e.target.parentElement.className;
  console.log('p1 type', P1Chassis)
  return Robot.Bosses.P1.prototype.buildRobotChassis(P1Chassis);
};

let buildP2Chassis = (e) => {
  let P2Chassis = e.target.parentElement.className;
  console.log('p2 type', P2Chassis)
  return Robot.Bosses.P2.prototype.buildRobotChassis(P2Chassis);
};

let buildP1Subtype = (e) => {
  let P1Subtype = e.target.parentElement.id;
  console.log(P1Subtype)
  return Robot.Bosses.P1.prototype.buildRobotSubtype(P1Subtype);
}
let buildP2Subtype = (e) => {
  let P2Subtype = e.target.parentElement.id;
  console.log(P1Subtype)
  return Robot.Bosses.P2.prototype.buildRobotSubtype(P2Subtype);
}

let buildP1Weapon = (e) => {
  let P1Weapon = e.target.parentElement.className;
  console.log('p1 weapon =', P1Weapon)
  return Robot.Bosses.P1.prototype.buildRobotWeapon(P1Weapon);
};

let buildP2Weapon = (e) => {
  let P2Weapon = e.target.parentElement.className;
  console.log('p2 weapon =', P2Weapon)
  return Robot.Bosses.P2.prototype.buildRobotWeapon(P2Weapon);
};

let buildP1Mod = (e) => {
  let P1Mod = e.target.parentElement.className;
  console.log('p1 mod',P1Mod)
  return Robot.Bosses.P1.prototype.buildRobotMod(P1Mod);
}

let buildP2Mod = (e) => {
  let P2Mod = e.target.parentElement.className;
  console.log('p2 mod',P2Mod)
  return Robot.Bosses.P2.prototype.buildRobotMod(P2Mod);
}

getChassis();
getSubtypes();
getWeapons();
getMods();

// $(document).on("click", "#player_one-setup .select-chassis", buildP1Chassis);
// $(document).on("click", "#player_two-setup .select-chassis", buildP2Chassis);
// $(document).on("click", "#player_one-subtype .select-chassisSubtype", buildP1Subtype);
// $(document).on("click", "#player_two-subtype .select-chassisSubtype", buildP2Subtype);
// $(document).on("click", "#player_one-weapon .select-weapon", buildP1Weapon);
// $(document).on("click", "#player_two-weapon .select-weapon", buildP2Weapon);
// $(document).on("click", "#player_one-mods .select-mod", buildP1Mod);
// $(document).on("click", "#player_two-mods .select-mod", buildP2Mod);

});