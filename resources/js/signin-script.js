// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', () => {
    // Get the form element
    const form = document.getElementById('signup-form');
  
    // Add submit event listener to the form
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
  
      // Get the user inputs
      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form['confirm-password'].value;
  
      // Validate the inputs
      if (password !== confirmPassword) {
        alert('Password and confirm password do not match');
        return;
      }
  
      // Add code to create a new account using the user inputs
      // You can make an AJAX request to a server endpoint or perform any other necessary operations here
  
      // Reset the form after submission
      form.reset();
    });
  });
  