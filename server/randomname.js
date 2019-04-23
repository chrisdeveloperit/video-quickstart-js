'use strict';

var ADJECTIVES = [
  'Daft', 'Eccentric', 'Fiesty', 'Golden',
  'OldSchool', 'Pompous', 'Quiet', 'Rowdy', 'Sneaky',
  'Unique', 'Yawning'
];

var FIRST_NAMES = [
  'Anna', 'Bobby', 'Cameron', 'Danny', 'Emmett', 'Frida', 'Gracie', 'Hannah',
  'Isaac', 'Jenova', 'Kendra', 'Lando', 'Nate', 'Owen', 'Penny',
  'Quincy', 'Roddy', 'Samantha', 'Tammy', 'Victoria', 'Wendy',
  'Xander', 'Yolanda', 'Zelda'
];

var LAST_NAMES = [
  'Berlin', 'Davenport', 'Essex', 'Brown', 'Chapman',
  'Hanover', 'Jamestown', 'Kane',
  'Minneapolis', 'Nevis', 'Oakland', 'Portland',
  'Tulsa', 'Utica', 'Vail', 'Yale',
  'Zimmerman'
];

function randomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

module.exports = function randomName() {
  return randomItem(ADJECTIVES) +
    randomItem(FIRST_NAMES) +
    randomItem(LAST_NAMES);
};
