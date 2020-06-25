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
 * Initialize it with the path to the the input file
 * Split the input file on line boundaries into an array.
 * Then loop through the array, yielding the next value until no more
 * Special case lines of the form "NaN ###" in which case
 *    it unshifts ### copies of NaN onto the input
 * @param path
 * @returns {IterableIterator<*>}
 */

function* linereader(path) {
  const rawdata = fs.readFileSync(path).toString();
  const lines = rawdata.split("\n");        // this adds an extra blank line
  while(true) {
    let nextSample = lines.shift();                 // grab the next one
    if (nextSample === "") return;                  // hit the blank line; we're done
    if (nextSample.substring(0, 4) === "NaN ") {
      const count = parseInt(nextSample.substring(4));
      for (let i = 1; i < count; i++) {             // unshift N-1 copies back into the input
        lines.unshift("NaN");
      }
      nextSample = NaN;                             // set nextSample to NaN
    }
    yield parseInt(nextSample);                     // yield back nextSample
  }
}

const fs = require('fs');

const gen = linereader('Raw Data Samples/samples0.txt');

while (true) {
  let nextVal = gen.next();
  if (nextVal.value === undefined) break;
  console.log(nextVal.value);
}

