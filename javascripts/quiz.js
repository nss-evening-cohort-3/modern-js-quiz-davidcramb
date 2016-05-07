"use strict";
let getChassis = () => {
  for (let i = 3; i < Object.keys(Robot.Factory).length; i++) {
    let chassisType = Object.keys(Robot.Factory)[i];
    $('.select-chassis').append(`<span><a href="#" class="btn">${chassisType}</a></span>`);
  }
};

let getWeapons = () => {
  Object.keys(Robot.Factory.Weapon).forEach(function(weapon) {
    $('.select-weapon').append(`<span><a href="#" class="btn">${weapon}</a></span>`);
  });
};

let getMods = () => {
  Object.keys(Robot.Factory.Mods).forEach(function(mod) {
    $('.select-mod').append(`<span><a href="#" class="btn">${mod}</a></span>`);
  })
};

let dothisfunction = (event) => {
  console.log(event);
  console.log($(this.event));
};

getChassis();
getWeapons();
getMods();
$('#select-chassis').on("click", dothisfunction);