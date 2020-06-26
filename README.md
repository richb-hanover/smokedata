# Preparing Raw Smokedata files

This repo contains auto-generated data and actual live-capture raw data of "response times"
for use with the **smokechart** plotting package.

The expected use case is to represent several day's (a few hundred hours)
worth of data, one hour per row,
each row containing up to 120 values (a sample every 30 seconds).

The **raw smokedata** format is a Javascript array of arrays.
There is *no* timestamp meta-data included in the raw smokedata format.
The producer of the data is responsible for tagging the data samples with their timestamps.

Raw smokedata rows can contain any number of data points
(or no points at all, represented by an empty array []).
The contents of a row must be numeric integer or floating point values.
Missing data points may be represented by the Javascript value *NaN*.
Missing values might be caused by an event that prevented the sample
from being recorded, for example, if no response was received for a ping-requet packet.


Because the raw data represents a historical sample, it will never change.
The **smokechart** package has functions for reducing the size of the
array to avoid re-computation of median, percentile error bands, etc.

## Source Files (src)

This repo contains several Javascript programs to programmatically generate raw smokedata for testing.
Source files contain their generated data as a comment.

* **perfectcone.js** - Generate 24 rows of data containing samples centered around a median value.
The first row has only the median value, the second has 3 values [med-1, med, med+1], the third row five values,
and so on to the 24th row with 49 values in the range [med-24..med+24]
The expected plot will be a "cone" with the earliest value only showing a line, and a uniform distribution of "bands".

* **conedata.js** - Generate 24 rows containing 120 samples of data
randomly distributed around a median value.
The spread of the generated data should be similar to that of the perfect cone, but the randomness will introduce variations.

* **samples-to-raw-smokedata.js** - Read a file of (numeric) readings,
one per line, (these might be every-30-second samples)
and output rows containing 120 samples as a Javascript array.
Changes the output file to be **.json**

## Raw Data files

The following files capture live data from real life for use in testing and understanding 

* **pingtest.txt** and **pingtest2.txt** - these were generated by running `fping 1.1.1.1 -D -c 100000 -i 30000 > pingtest.txt` for a long time.
This command pings a remote host every 30 seconds and records the response time in pingtest#.txt. pingtest2.txt contains a significant
interruption (> 1 hour) and can be used to test the *NaN*
representation.

* **TestMyInternet-samples.txt** and **TestMyInternet-samples2.txt** -
These were generated by the TestMyInter.net program by measuring
XMLHttpRequest() response times to an external server.
The **TestMyInternet-samples2.txt** has a brief interruption with a
Duration of 6000 msec (the timeout).
This could be substited with *NaN*.

* **JSON files** have names that match the source data files. 

## Smokedata files

The *Raw Data Samples* directory also contains JSON files with the **raw smokedata** created from the tools above.
These can be used by the **smokechart** plotting package.

