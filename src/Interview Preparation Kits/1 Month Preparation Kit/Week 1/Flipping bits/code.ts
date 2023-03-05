'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n: number): number {
    let numberString = n.toString();

let binary = parseInt(numberString).toString(2);
while ( binary.length < 32 ) {
  binary = "0" + binary;
}

const arrayBinary = binary.split("");
let reverseBinary;

for (let i = 0; i < binary.length; i++) {
  let changedNumber = binary[i] == "0" ? "1" : "0";
  reverseBinary == undefined ? reverseBinary = changedNumber : reverseBinary = reverseBinary + changedNumber;
}

let reverseBinaryArray = reverseBinary.toString().split("")

let decimal = 0;
let arrayDecimal = []
reverseBinaryArray = reverseBinaryArray.reverse();


if (reverseBinaryArray) {
  for (let i = 0; i < reverseBinaryArray.length; i++) {
    arrayDecimal.push((2 ** i));
  }
}

arrayDecimal = arrayDecimal;

for (let i = 0; i < arrayDecimal.length; i++) {
  decimal += arrayDecimal[i] * parseInt(reverseBinaryArray[i]);
}
    
    return decimal;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        const result: number = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
