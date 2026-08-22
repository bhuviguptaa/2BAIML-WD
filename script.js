document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    let message = document.getElementById("message");

    if (name == "" || email == "" || phone == "" ||
        dob == "" || course == "" || address == "" || gender == null) {

        message.innerHTML = "Please fill all the fields.";
        message.style.color = "red";
        return;
    }

    if (phone.length != 10 || isNaN(phone)) {
        message.innerHTML = "Please enter a valid 10-digit phone number.";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    document.getElementById("registrationForm").reset();
});