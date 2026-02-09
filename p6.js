const fs = require("fs");
// File write
fs.writeFile("studentData.txt", "Student Name: Shyam Varshney\n", (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("File written successfully");
    }
});
// File read
fs.readFile("studentData.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Read error");
    } else {
        console.log("File Data:\n" + data);
    }
});
// File append
fs.appendFile("studentData.txt", "Status: Present\n", (err) => {
    if (err) {
        console.log("Append error");
    } else {
        console.log("Data appended");
    }
});

