/**
 *
 * samples-to-raw-smokedata.js
 * Read a file of (numeric) readings, one per line, (these might be every-30-second samples)
 * and output rows containing 120 samples as a Javascript array.
 *
 * Special case a line of "NaN #" which inserts # instances of NaN into the arrays
 */

/**
 * linereader(theLines) - generator function to return the next sample
 * Call it with the lines read in from the input file
 * Return done when there are no more values.
 * Otherwise, yield the next value
 * It has a special case for lines of the form "NaN ###" in which case
 *    it unshifts ### copies of NaN onto the input
 * @param theLines
 * @returns {IterableIterator<*>}
 */

function* linereader(theLines) {
   nextSample = theLines.shift();        // grab the next value
  nextSample = theLines.shift();
  yield nextSample;
  if (nextSample === undefined) return;       // nothing left, just return
  // if (nextSample.substring(0,3) === "NaN ") {
  //   for (let i = 1; i < 4; i++) {                 // unshift 119 copies back into the input
  //     theLines.unshift("NaN");
  //   }
  //   yield NaN                                 // and yield the first NaN
  // }
  // else {
  //   yield parseInt(nextSample);
  // }
}


// function hourlies(med, h) {
//   const hourVals = [];
//   const numSamples = 120;
//   for (let i = 0; i < numSamples; i++) {
//     const val = Math.round(med+(h+1)*2*(Math.random()-0.5));
//     hourVals.push(val);
//   }
//   console.log(JSON.stringify(hourVals));
//   return hourVals;
// }

// const dayValues = [];
// let hourCount = 0;
// while (lines.length > 0) {
//
// }
// for (let i = 0; i < numHours; i++){
//   dayValues.push(hourlies(median, i));
// }

const fs = require('fs');
const rawdata = fs.readFileSync('Raw Data Samples/samples0.txt').toString();
const lines = rawdata.split("\n");

const gen = linereader(lines);

// while (true) {
//   let nextVal = gen.next();
  // if (nextVal.done) break;
  console.log(gen.next().value);
  // nextVal = gen.next();
  console.log(gen.next().value);
// }

// console.log(lines);
