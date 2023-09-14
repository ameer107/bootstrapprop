document.addEventListener('DOMContentLoaded', function() {
    const spinner = document.getElementById('spinner');

    // Attach click event listeners to elements with the class 'usespinner'
    const customClickElements = document.querySelectorAll('.usespinner');

    customClickElements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            // Prevent the default behavior of the link/button
            event.preventDefault();

            // Show the spinner
            spinner.style.display = 'block';

            // After 3 seconds, navigate to the target URL
            setTimeout(function() {
                window.location.href = element.getAttribute('href');
            }, 3000); // 3 seconds (3000 milliseconds)
        });
    });
});
