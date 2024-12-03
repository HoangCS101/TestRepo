// Display a greeting message in the console
console.log("Hello, welcome to my simple JavaScript file!");

// Function to show an alert
function showAlert() {
    alert("Button clicked! JavaScript is working!");
}

// Example of changing content dynamically
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = "Click Me!";
    button.onclick = showAlert;
    document.body.appendChild(button);
});
