'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    if(s.includes("PM")){
        if(s.includes("01:")&&s.charAt(1)=='1'){
            s = s.replace("01:", "13:");
            s = s.replace("PM", "");
        }
        if(s.includes("02:")&&s.charAt(1)=='2'){
            s = s.replace("02:", "14:");
            s = s.replace("PM", "");
        }
        if(s.includes("03:")&&s.charAt(1)=='3'){
            s = s.replace("03:", "15:");
            s = s.replace("PM", "");
        }
        if(s.includes("04:")&&s.charAt(1)=='4'){
            s = s.replace("04:", "16:");
            s = s.replace("PM", "");
        }
        if(s.includes("05:")&&s.charAt(1)=='5'){
            s = s.replace("05:", "17:");
            s = s.replace("PM", "");
        }
        if(s.includes("06:")&&s.charAt(1)=='6'){
            s = s.replace("06:", "18:");
            s = s.replace("PM", "");
        }
        if(s.includes("07:")&&s.charAt(1)=='7'){
            s = s.replace("07:", "19:");
            s = s.replace("PM", "");
        }
        if(s.includes("08:")&&s.charAt(1)=='8'){
            s = s.replace("08:", "20:");
            s = s.replace("PM", "");
        }
        if(s.includes("09:")&&s.charAt(1)=='9'){
            s = s.replace("09:", "21:");
            s = s.replace("PM", "");
        }
        if(s.includes("10:")&&s.charAt(1)=='0'){
            s = s.replace("10:", "22:");
            s = s.replace("PM", "");
        }
        if(s.includes("11:")&&s.charAt(1)=='1'){
            s = s.replace("11:", "23:");
            s = s.replace("PM", "");
        }
        if(s.includes("12:")&&s.charAt(1)=='2'){
            s = s.replace("12:", "12:");
            s = s.replace("PM", "");
        }
    }
    if(s.includes("AM")){
        if(s.includes("01:")){
            s = s.replace("AM", "");
        }
        if(s.includes("02:")){
            s = s.replace("AM", "");
        }
        if(s.includes("03:")){
            s = s.replace("AM", "");
        }
        if(s.includes("04:")){
            s = s.replace("AM", "");
        }
        if(s.includes("05:")){
            s = s.replace("AM", "");
        }
        if(s.includes("06:")){
            s = s.replace("AM", "");
        }
        if(s.includes("07:")){
            s = s.replace("AM", "");
        }
        if(s.includes("08:")){
            s = s.replace("AM", "");
        }
        if(s.includes("09:")){
            s = s.replace("AM", "");
        }
        if(s.includes("10:")){
            s = s.replace("AM", "");
        }
        if(s.includes("11:")){
            s = s.replace("AM", "");
        }
        if(s.includes("12:")&&s.charAt(1)=='2'){
            s = s.replace("12:", "00:");
            s = s.replace("AM", "");
        }
    }
    return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
