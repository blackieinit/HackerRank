'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}


/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    
    let negatives: number = 0;
    let positives: number = 0;
    let zeros: number = 0;
    
    arr.forEach( (number_array) => {
        
        if (number_array > 0) {
            positives++;
        } else if ( number_array < 0 ) {
            negatives++;
        } else {
            zeros++;
        }
    });
    
    let ratio_positive = (positives / arr.length).toFixed(6);
    let ratio_negatives = (negatives / arr.length).toFixed(6);
    let ratio_zeros = (zeros / arr.length).toFixed(6);
    
    while ((ratio_positive).split(".")[1].length <= 6){
        ratio_positive = ratio_positive + "0";
    }
    
    while ((ratio_negatives).split(".")[1].length <= 6){
        ratio_negatives = ratio_negatives + "0";
    }
    
    while ((ratio_zeros).split(".")[1].length <= 6){
        ratio_zeros = ratio_zeros + "0";
    }
    
    console.log(parseFloat(ratio_positive))
    console.log(parseFloat(ratio_negatives))
    console.log(parseFloat(ratio_zeros))
       

}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}