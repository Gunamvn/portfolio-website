// This file contains JavaScript code for interactive features of the portfolio website, such as event listeners and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple event listener for a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }

    // Function to dynamically update content
    function updateContent() {
        const contentArea = document.getElementById('content');
        if (contentArea) {
            contentArea.innerHTML = '<p>Dynamic content updated!</p>';
        }
    }

    // Call updateContent on page load
    updateContent();
});