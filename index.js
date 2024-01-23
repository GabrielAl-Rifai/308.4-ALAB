//Part 1: Refactoring Old Code

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = csvData.split('\n');

for (const row of rows) {
    const cells = row.split(',');

//     console.log(cells[0], cells[1], cells[2], cells[3]);
// }

// Part 2: Expanding Functionality

const firstRowCells = rows[0].split(',');
const numColumns = firstRowCells.length;

const dataArray = [];

//     if (cells.length === numColumns) {
//         dataArray.push(cells);
//     }
// }

// console.log(dataArray);

// console.log("Header row:", dataArray[0]);
// console.log("First row:", dataArray[1]);

// Part 3: Transforming Data

// // Initialize a two-dimensional array to store the data

    if (cells.length === numColumns) {
        const rowObject = {};
        for (let i = 0; i < numColumns; i++) {

            const key = firstRowCells[i].toLowerCase();
            rowObject[key] = cells[i];
        }

        dataArray.push(rowObject);
    }
}

// console.log(dataArray);

// console.log("First row object:", dataArray[0]);
// console.log("Second row object:", dataArray[1]);


// Part 4: Sorting and Manipulating Data

const dataArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

dataArray.pop();

const newObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
dataArray.splice(1, 0, newObject);

const endObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
dataArray.push(endObject);

console.log(dataArray);

let totalAge = 0;
for (const obj of dataArray) {
  totalAge += parseInt(obj.age);
}

const averageAge = totalAge / dataArray.length;
console.log("Average Age:", averageAge);