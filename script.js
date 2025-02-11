document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    if (!name || !email || !phone || !country) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    alert("Form submitted successfully!");
});
