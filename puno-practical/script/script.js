document.addEventListener("DOMContentLoaded", function () {


    // 1. Get the form
    const form = document.querySelector("form");

    const nameInput = document.getElementById("first-name");
    nameInput.addEventListener("input", function () {
        // Remove any non-alphabetic characters from the input value
        this.value = this.value.replace(/[^a-zA-Z]/g, "");
    });

    const lastNameInput = document.getElementById("last-name");
    lastNameInput.addEventListener("input", function () {
        // Remove any non-alphabetic characters from the input value
        this.value = this.value.replace(/[^a-zA-Z]/g, "");
    });

    const phoneInput = document.getElementById("number");
    phoneInput.addEventListener("input", function () {
        // Remove any non-numeric characters from the input value
        this.value = this.value.replace(/[^0-9+]/g, "");
    });

    const emailInput = document.getElementById("email");
    emailInput.addEventListener("input", function () {
        // Remove any spaces from the input value
        this.value = this.value.replace(/\s/g, "");
    });


    // 2. Get the Reset button
    const resetBtn = document.querySelector(".reset-btn");

    // 3. Event when the form is submitted
    form.addEventListener("submit", function (event) {

        // Stop the default submission first
        event.preventDefault();

        // 4. Get the values of the personal information
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("number").value.trim();
        const dateOfBirth = document.getElementById("date").value;

        // 5. Get the selected gender
        const gender = document.querySelector('input[name="gender"]:checked');

        // 6. Get the department and symptoms
        const department = document.getElementById("department").value;
        const symptoms = document.getElementById("message").value.trim();

        // 7. Validation for phone number (+63 followed by 10 digits = 13 characters)
        if (phone.length !== 13) {
            alert("Phone number must be +63 followed by 10 digits.");
            return;
        }

        // 8. Validation for birthday
        const birthDate = new Date(dateOfBirth);
        const today = new Date();

        if (birthDate > today) {
            alert("Date of birth cannot be in the future.");
            return;
        }

        // 9. Validation for gender
        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        // 10. Get the gender value
        const selectedGender = gender.value;

        // 11. Confirmation before continuing
        const confirmSubmit = confirm("Are you sure you want to register?");

        if (!confirmSubmit) {
            return;
        }

        // 12. Save each value to localStorage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("dateOfBirth", dateOfBirth);
        localStorage.setItem("gender", selectedGender);
        localStorage.setItem("department", department);
        localStorage.setItem("symptoms", symptoms);

        // 13. Show in the browser console (for checking)
        console.log("Patient Registration saved");

        // 14. Go to home.html
        window.location.href = "home.html";
    });

    // 15. Reset button
    resetBtn.addEventListener("click", function (event) {

        const confirmClear = confirm("Are you sure you want to clear the form?");

        // If the user says No, stop the reset
        if (!confirmClear) {
            event.preventDefault();
        }
    });

});