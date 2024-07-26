function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var destination = document.getElementById("destination").value;

    if (name == "" || email == "" || destination == "") {
        alert("All fields must be filled out");
        return false;
    }

    // Simple email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}