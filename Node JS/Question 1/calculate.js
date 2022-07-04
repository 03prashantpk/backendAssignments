const https = require("https");


calculate = (year, month, date) => {

    // user dob and today's date.
    const dob = new Date(`${year}/${month}/${date}`);
    const today = new Date();

    // calculating difference
    const calculatedDifference = today - dob;

    // dividing dfference by one year milisocends.
    const age = Math.floor(calculatedDifference / (365.25 * 24 * 60 * 60 * 1000));

    return age;
}

module.exports = { calculate };