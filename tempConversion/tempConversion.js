const ftoc = function(temperature) {
  let offset = 32;
  let ratio = (5 / 9);
  return Math.round(((temperature - offset) * ratio) * 10) / 10;
}

const ctof = function(temperature) {
  let offset = 32;
  let ratio = (9 / 5);
  return Math.round(((temperature * ratio) + offset) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
