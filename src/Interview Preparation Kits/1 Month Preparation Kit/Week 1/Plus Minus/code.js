'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr) {
    var negatives = 0;
    var positives = 0;
    var zeros = 0;
    arr.forEach(function (number_array) {
        if (number_array > 0) {
            positives++;
        }
        else if (number_array < 0) {
            negatives++;
        }
        else {
            zeros++;
        }
    });
    var ratio_positive = (positives / arr.length).toFixed(6);
    var ratio_negatives = (negatives / arr.length).toFixed(6);
    var ratio_zeros = (zeros / arr.length).toFixed(6);
    while ((ratio_positive).split(".")[1].length <= 6) {
        ratio_positive = ratio_positive + "0";
    }
    while ((ratio_negatives).split(".")[1].length <= 6) {
        ratio_negatives = ratio_negatives + "0";
    }
    while ((ratio_zeros).split(".")[1].length <= 6) {
        ratio_zeros = ratio_zeros + "0";
    }
    console.log(parseFloat(ratio_positive));
    console.log(parseFloat(ratio_negatives));
    console.log(parseFloat(ratio_zeros));
}
function main() {
    var n = parseInt(readLine().trim(), 10);
    var arr = readLine().replace(/\s+$/g, '').split(' ').map(function (arrTemp) { return parseInt(arrTemp, 10); });
    plusMinus(arr);
}
