document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;
  
    // Display confirmation message
    const response = document.getElementById('form-response');
    response.textContent = `Thank you, ${name}. Your appointment request for ${date} has been received. We'll contact you at ${email} soon.`;
    response.style.color = 'green';
  
    // Clear the form
    this.reset();
  });
  
