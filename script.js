document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Check if all required fields are filled
    const requiredFields = document.querySelectorAll('#contactForm [required]');
    requiredFields.forEach(function(field) {
        if (!field.value) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '#ccc';
        }
    });

    // If the form is not valid, prevent submission
    if (!isValid) {
        alert('Please fill out all required fields.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});
