var forLoop = function(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${} strange loop${i === 0 ? '' : 's'}`);
  }
}