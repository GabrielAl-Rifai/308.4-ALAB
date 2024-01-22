//Part 1: Refactoring Old Code

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = csvData.split('\n');

for (const row of rows) {
    const cells = row.split(',');

    console.log(cells[0], cells[1], cells[2], cells[3]);
}

// Part 2: Expanding Functionality

// Part 3: Transforming Data