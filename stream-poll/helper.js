// create a randomize integer number, but in relaity use uuid
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports.getRandomInt = getRandomInt;
