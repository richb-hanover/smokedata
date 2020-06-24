/**
 * Generate a "cone of data" centered around a median value
 *
 * There will be 24 rows of data, each containing 120 samples.
 * Each row is centered around a "median" value of 50
 * Each row's sample is a random value multiplied by the "hour" so that
 *   later hours have a larger spread.
 *
 * This should have an obvious appearance in a plot
 */
 /*
  * One run of the program produced this data:
 [
 [51,50,50,50,49,51,50,50,50,51,51,49,49,49,49,51,51,50,51,49,51,50,50,49,51,50,51,49,50,49,49,50,50,49,51,50,51,51,49,51,50,49,50,50,49,49,49,50,50,51,50,51,50,50,50,49,49,50,49,51,50,50,49,50,50,50,50,51,49,50,51,50,50,51,51,50,50,49,51,50,50,50,50,51,49,51,49,49,49,50,50,51,51,49,51,50,49,51,50,50,49,50,49,51,50,49,50,50,51,49,51,51,51,50,49,49,50,51,50,50]
[49,50,51,49,50,49,51,50,51,52,50,49,51,48,51,48,50,50,51,48,50,51,50,51,50,49,51,50,51,49,49,50,50,49,49,50,49,50,51,50,51,48,51,51,51,50,50,50,49,49,48,52,51,48,51,51,52,51,49,50,49,51,52,50,51,49,51,52,51,48,51,48,50,49,51,48,50,49,48,50,52,52,50,48,49,50,49,49,50,50,52,49,50,48,51,49,52,52,51,51,52,50,50,51,51,51,49,49,50,49,50,51,49,48,50,48,51,50,49,50]
[49,48,52,53,50,50,49,53,53,48,51,52,52,52,53,53,52,49,51,51,52,52,50,48,49,51,47,52,49,48,51,51,52,49,48,48,48,49,50,52,53,49,51,49,49,49,48,47,52,48,49,53,52,48,52,50,48,51,49,51,53,49,48,47,51,48,53,51,47,48,50,48,48,52,52,50,52,53,53,52,50,50,49,52,48,51,48,52,49,48,49,49,47,49,48,52,49,51,52,49,50,52,48,49,51,47,48,49,52,49,50,49,49,48,49,51,52,47,48,52]
[46,47,52,49,54,53,52,46,50,53,54,51,48,49,48,52,47,47,49,50,51,49,47,54,47,48,49,54,51,52,50,51,49,50,51,48,49,47,53,53,51,52,47,50,52,50,53,51,53,50,53,47,51,51,48,52,46,51,54,47,50,53,49,47,49,51,47,51,50,50,53,53,47,54,49,49,49,48,51,47,46,46,48,47,51,51,50,51,47,54,53,51,50,51,53,51,49,49,48,47,49,53,52,50,50,52,51,47,52,50,47,52,52,48,50,46,48,51,52,46]
[47,48,52,50,55,45,54,54,49,47,51,47,54,47,51,47,48,53,46,50,52,47,47,53,46,47,52,47,48,47,48,52,48,49,47,50,52,51,46,51,50,50,52,53,54,50,48,48,51,47,45,51,52,48,51,45,48,50,48,54,47,49,51,51,49,52,47,46,46,54,52,51,46,54,55,46,50,46,46,51,54,55,55,47,50,54,51,45,48,50,47,46,48,51,50,54,53,54,50,51,52,49,53,48,52,47,53,49,48,46,51,55,50,45,54,52,53,49,54,54]
[50,55,50,46,45,53,56,49,44,52,45,46,53,54,54,53,45,51,51,56,55,47,55,50,47,49,52,55,45,50,55,55,54,46,50,44,50,50,56,46,48,50,54,46,46,50,47,47,54,54,51,45,52,47,47,46,53,51,48,52,49,53,44,54,47,48,48,49,45,47,45,52,53,48,54,51,53,54,49,46,47,44,45,48,47,56,46,47,52,53,53,50,53,48,50,55,54,49,51,44,46,54,53,54,51,54,53,55,53,52,45,55,50,45,54,46,54,52,51,48]
[43,44,47,57,52,55,50,53,52,43,53,48,49,47,48,49,51,55,53,51,57,45,45,57,49,43,56,52,46,43,55,48,44,51,54,55,57,44,49,52,52,52,47,57,47,44,43,54,51,57,52,46,57,55,46,43,49,47,57,44,56,44,50,47,56,45,44,52,44,44,51,54,47,51,54,45,56,48,51,44,49,53,56,43,44,52,54,54,51,55,47,44,55,48,51,45,51,49,44,44,56,51,51,44,43,44,45,54,45,46,51,50,46,47,43,50,43,43,49,46]
[42,46,52,43,53,53,47,42,48,55,45,44,46,44,43,53,56,48,50,50,54,54,48,58,46,48,52,55,58,49,45,53,52,43,53,44,44,54,48,47,50,51,51,55,57,58,46,53,49,47,43,52,58,46,48,43,52,54,44,56,54,56,52,43,54,57,48,53,44,44,45,55,51,53,44,54,57,46,48,48,44,44,44,45,51,46,55,42,46,46,50,55,50,47,50,47,45,55,58,51,45,45,44,47,45,55,45,53,51,47,57,51,55,53,47,51,49,58,57,57]
[56,45,53,56,56,52,57,47,53,41,42,44,55,42,44,44,53,46,55,55,50,45,45,57,46,55,44,53,56,59,49,46,53,57,51,56,52,47,46,50,57,52,52,50,47,46,52,53,55,45,58,54,45,41,45,49,48,49,56,55,56,44,47,48,49,51,49,52,49,47,52,53,46,55,52,43,44,52,57,54,50,42,51,50,42,56,47,57,49,51,56,45,50,45,44,43,59,55,58,48,45,50,44,50,43,58,58,59,56,48,48,52,58,42,46,58,42,54,59,41]
[46,51,54,44,56,43,54,45,41,48,45,52,55,56,47,42,48,54,59,58,51,55,44,45,49,59,48,51,47,59,42,52,56,58,56,41,47,47,43,50,57,57,59,51,48,46,53,59,56,58,55,53,41,46,41,45,49,41,58,60,46,50,58,48,48,51,45,42,59,48,52,45,50,44,48,46,56,53,57,46,44,48,58,47,43,58,59,55,45,47,43,48,58,45,59,55,60,41,58,47,47,59,56,44,42,53,48,60,43,48,50,58,57,54,46,56,43,41,43,50]
[56,48,52,45,43,60,54,42,49,50,40,59,51,43,40,57,43,54,56,57,56,57,40,46,55,61,60,44,47,59,53,53,44,39,44,53,40,49,52,42,53,60,45,46,58,59,58,56,59,47,55,55,55,56,54,57,52,46,44,54,40,45,40,46,56,40,41,51,40,42,43,42,61,53,51,55,43,46,40,44,55,51,49,40,49,47,41,52,39,51,60,48,50,39,56,48,46,52,43,58,40,49,50,46,48,41,44,41,40,51,53,39,53,45,56,40,60,39,39,58]
[53,50,46,43,46,62,56,52,44,59,41,55,55,58,40,56,40,48,38,53,49,53,57,52,49,43,61,54,40,43,38,58,46,40,51,44,56,39,61,50,44,61,50,59,53,45,53,59,60,62,60,56,52,56,48,57,50,43,40,47,57,46,50,51,51,38,49,58,60,42,43,42,58,39,52,54,62,59,49,43,57,42,59,42,39,62,45,42,62,61,54,54,55,45,46,46,62,40,52,43,50,48,58,44,58,55,59,57,61,46,45,45,49,46,48,52,48,57,51,57]
[52,57,38,59,38,58,50,61,48,43,48,47,55,45,44,46,60,52,57,39,41,63,45,58,48,48,47,48,38,56,56,39,58,42,62,51,52,57,41,41,55,50,39,38,37,40,63,43,44,45,39,53,45,37,60,50,37,56,60,60,58,43,47,57,56,41,51,45,56,55,46,53,59,58,53,60,47,39,52,37,47,60,50,59,58,59,47,40,63,52,40,56,54,41,38,54,46,55,51,51,48,61,49,59,62,49,49,38,63,48,46,62,62,45,62,61,59,45,44,56]
[47,49,39,58,63,51,58,64,48,48,44,39,64,37,52,41,58,40,41,48,46,55,55,38,56,38,39,45,57,39,57,55,50,50,46,53,62,55,54,51,56,53,49,47,46,54,40,46,62,49,50,37,36,58,46,57,46,37,39,53,60,39,64,62,48,59,36,41,61,59,40,57,37,42,52,36,64,59,52,38,37,54,56,41,46,60,57,39,52,62,51,41,45,60,44,55,45,57,38,47,59,44,58,50,60,48,51,60,51,45,41,51,47,50,51,59,49,45,61,40]
[61,60,43,41,54,40,62,40,47,56,62,43,52,38,60,36,37,63,43,45,58,50,42,37,52,57,46,62,53,51,51,40,60,53,48,58,47,45,49,48,49,49,38,36,47,57,55,35,41,55,46,45,43,43,51,39,46,47,38,51,62,58,61,44,63,55,44,49,51,37,56,57,63,53,44,55,43,64,59,57,42,59,47,51,38,54,41,60,47,49,58,44,60,41,45,49,64,49,36,39,45,47,47,37,36,49,63,46,50,55,44,38,48,65,42,46,42,37,55,49]
[56,48,43,51,44,56,47,65,48,41,40,38,54,59,54,65,44,38,53,55,50,41,41,63,54,43,65,49,57,36,41,56,49,48,50,46,61,64,47,43,53,56,53,39,65,50,64,54,58,40,35,40,53,53,65,52,59,59,43,43,64,47,44,63,52,43,56,64,40,51,57,48,40,35,49,39,35,61,53,62,64,54,46,44,48,45,41,51,53,55,39,62,44,54,66,54,58,41,61,50,44,45,59,40,64,51,55,62,47,59,55,42,40,66,39,38,54,41,58,41]
[64,34,47,53,55,62,58,51,47,61,57,65,43,34,67,62,58,56,51,37,61,48,33,66,54,59,35,67,51,47,58,61,42,42,55,58,48,37,59,63,65,64,35,56,53,51,52,59,50,64,48,64,50,62,57,37,37,52,40,62,44,56,36,39,50,62,51,40,67,65,60,36,37,63,59,48,57,52,39,47,60,66,51,50,39,40,45,52,37,65,45,53,43,38,39,61,35,52,38,54,53,51,35,49,43,58,39,48,40,53,66,64,52,59,55,52,66,54,51,43]
[50,47,62,48,67,49,56,62,33,62,63,37,43,61,41,39,55,46,54,39,34,57,60,44,40,35,49,61,36,33,47,49,41,66,43,34,49,33,53,49,61,32,41,58,40,43,47,32,68,66,66,51,49,43,62,42,40,35,47,42,56,36,66,67,36,41,42,64,62,59,43,59,66,61,66,39,34,45,37,62,35,50,50,62,38,60,54,49,44,65,49,35,58,45,55,41,45,68,45,39,64,66,64,46,67,44,60,61,50,45,48,46,57,50,54,66,67,55,66,50]
[46,50,65,46,52,48,40,31,34,33,64,57,67,62,62,33,38,37,61,39,40,45,32,66,44,45,56,36,64,44,65,64,61,37,40,51,45,45,51,51,61,37,50,46,47,61,32,63,60,63,68,43,35,53,59,41,69,51,36,33,50,63,43,60,53,42,42,67,38,48,32,34,40,55,37,61,66,34,53,57,54,56,37,66,49,60,36,58,31,45,43,62,43,36,52,62,62,52,35,55,55,39,38,34,40,36,31,49,53,49,36,67,56,40,54,59,68,37,54,60]
[31,55,68,51,61,61,43,58,30,43,53,52,48,48,48,45,51,39,37,52,46,64,62,52,44,39,70,52,58,59,49,54,32,58,64,55,39,38,55,49,63,65,46,39,59,32,40,60,48,35,58,38,39,69,38,67,60,44,44,39,51,33,46,42,36,48,31,54,45,39,61,42,39,62,51,36,59,37,39,44,55,52,57,43,65,50,35,44,42,46,45,60,45,62,43,56,43,65,70,48,48,36,61,56,69,33,42,43,32,44,50,53,69,42,59,42,30,65,60,39]
[37,70,48,38,43,71,57,56,35,67,71,39,49,66,68,62,49,53,69,38,32,45,49,48,33,67,69,49,51,58,36,61,49,31,66,45,49,29,35,65,60,50,65,35,59,49,70,65,51,63,53,70,53,38,58,66,34,64,58,42,37,41,64,58,43,66,54,48,47,68,40,46,49,47,60,62,43,68,47,43,42,45,38,35,58,57,32,42,62,68,61,33,43,67,50,65,45,53,40,47,55,35,35,58,68,60,60,42,49,68,31,38,68,38,64,52,50,58,59,47]
[65,39,36,36,68,42,31,39,45,33,37,49,55,72,54,37,39,49,58,39,39,69,56,66,48,53,47,44,33,45,51,51,55,64,63,71,68,51,56,53,49,35,34,28,47,39,29,70,52,66,46,66,70,40,50,71,40,54,53,37,34,52,62,54,62,54,38,69,30,38,56,49,45,45,41,39,33,31,70,30,69,34,39,70,68,35,64,51,65,45,68,43,51,63,45,39,57,65,54,52,67,41,54,45,67,39,41,29,41,61,56,38,68,67,57,47,34,43,50,52]
[55,32,36,67,47,50,70,55,61,58,44,69,63,30,65,63,59,28,45,58,50,37,30,53,38,40,40,35,28,68,34,47,51,72,50,33,64,65,49,45,59,63,30,69,38,44,57,37,27,34,38,60,29,59,66,54,67,65,40,43,50,57,36,69,49,52,32,57,68,70,46,72,72,70,46,53,57,68,62,33,40,53,51,63,48,34,47,34,59,33,41,62,62,55,31,37,44,66,63,73,44,41,49,33,37,47,33,51,50,35,27,40,44,56,47,30,59,65,46,41]
[64,73,34,66,57,55,57,31,71,58,44,70,65,48,56,50,28,51,67,45,58,50,29,60,52,72,45,70,31,42,64,36,27,33,67,43,65,32,41,57,28,62,65,50,34,73,38,30,47,56,31,32,41,58,50,63,43,34,68,72,70,32,50,66,41,65,35,52,48,29,29,26,54,48,74,48,56,74,66,65,56,40,43,68,59,67,37,31,74,27,67,46,37,61,64,33,61,46,28,62,59,70,72,43,57,45,55,52,35,73,26,51,33,73,67,40,54,72,28,37]
 ]
  */

function hourlies(med, h) {
  const hourVals = [];
  const numSamples = 120;
  for (let i = 0; i < numSamples; i++) {
    const val = Math.round(med+(h+1)*2*(Math.random()-0.5));
    hourVals.push(val);
  }
  console.log(JSON.stringify(hourVals));
  return hourVals;
}

const median = 50;
const numHours = 24;
dayValues = [];
for (let i = 0; i < numHours; i++){
  dayValues.push(hourlies(median, i));
}
