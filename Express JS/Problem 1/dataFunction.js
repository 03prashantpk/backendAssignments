const fs = require('fs');
const studentInfo = require("./studentData.json");

// add data
addData = () => {

    let user = {
        studentFirstName: "John",
        collageName: "IIT",
        location: "Mumbai"
    };

    // Adding user to the end of the array.
    studentInfo.push(user);

    fs.writeFile("studentData.json", JSON.stringify(studentInfo), err => {
        if (err) throw err;

        var success = {
            "result": "Success"
        };

        console.log(JSON.stringify(success));

    });
};

// addData();

//read data
retriveData = () => {

    var studentsData = fs.readFileSync('studentData.json');
    var student = JSON.parse(studentsData);
    var len = student.length;
    return student[len - 1];
};

// retriveData();


// Exporting functions as module
module.exports = { addData, retriveData };