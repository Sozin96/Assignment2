// Nav bar dropdown
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}
// End of Nav bar dropdown

// Form validation
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission


        // Get form values using the ID of the form elements
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        console.log('Form values:', { name, email, phone, message });

        // Basic validation
        if (name =="" || email=="" || phone=="" || message=="") {
            alert('Please fill in all the fields.');
            return;
        }

        if (phone.length < 10 || isNaN(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Show a thank you alert with the user's name
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Clear the form fields
        document.getElementById('contactForm').reset();
    });
});
// End of Form validation

// Hire ME button
// Function to navigate to the contact page
function navigateToContactPage() {
    window.location.href = 'contact.html'; // Redirect to contact.html
}

// Event listener to call the function when the button is clicked
document.getElementById('btn').addEventListener('click', navigateToContactPage);

// End of Hire ME button


