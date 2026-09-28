document.addEventListener("DOMContentLoaded", function () {

    // 1. Get the box where the data will be shown
    let patientInfo = document.getElementById("patient-summary");

    // If there is no "patient-summary", use the ".main-container" box instead
    if (patientInfo === null) {
        patientInfo = document.querySelector(".main-container");
    }

    // 2. Get each saved value from localStorage
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const gender = localStorage.getItem("gender");
    const department = localStorage.getItem("department");
    const symptoms = localStorage.getItem("symptoms");

    // Date of birth: check both possible key names
    let dateOfBirth = localStorage.getItem("dob");
    if (dateOfBirth === null) {
        dateOfBirth = localStorage.getItem("dateOfBirth");
    }

    // 3. If nothing is saved yet
    if (firstName === null) {
        patientInfo.innerHTML = "No data found. Please fill out the form first.";
        return;
    }

    // 4. Show the data inside the box
    patientInfo.innerHTML =
        "<h2>Registration Summary</h2>" +
        "<p>First Name: " + firstName + "</p>" +
        "<p>Last Name: " + lastName + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Phone Number: " + phone + "</p>" +
        "<p>Date of Birth: " + dateOfBirt + "</p>" +
        "<p>Gender: " + gender + "</p>" +
        "<p>Department: " + department + "</p>" +
        "<p>Symptoms: " + (symptoms || "None") + "</p>";

});