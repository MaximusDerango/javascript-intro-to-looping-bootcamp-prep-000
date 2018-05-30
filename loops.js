var forLoop = function(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("I am 2 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
    // array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}`);
  }
  return array;
};