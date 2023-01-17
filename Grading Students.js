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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let newGrades = [];
    let i = 0
    grades.forEach(grade => {
            if(5-grade%10 < 3 && (5-grade%10) + grade >= 40 && grade%10 <= 5){
                newGrades[i] = (5-grade%10) + grade;
            }
            else if(10-grade%10 < 3 && (10-grade%10) + grade >= 40 && grade%10 > 5){
                newGrades[i] = (10-grade%10) + grade;
            }
            else{
                newGrades[i] = grade;
            }
            i++;
        })
    // newGrades.forEach(newGrade => {
    //     console.log(newGrade);
    // })
    return newGrades;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
