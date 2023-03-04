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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    let hour: number = parseInt(s.split(":")[0]);
    const partial_hour = s.split(":");
    const meridiem: string = s.substring(s.length - 2);

    if (meridiem === "PM") {
        if (hour == 12) {
            const hour_convert = `${hour}:${partial_hour[1]}:${partial_hour[2]}`.replace(meridiem, "");
            return hour_convert;
        }
        hour += 12;
        const hour_convert = `${hour}:${partial_hour[1]}:${partial_hour[2]}`.replace(meridiem, "");
        return hour_convert
    } else {
        if (hour == 12) {
            const hour_convert = `00:${partial_hour[1]}:${partial_hour[2]}`.replace(meridiem, "");
            return hour_convert;
        }
        
        return s.replace(meridiem, "");
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
