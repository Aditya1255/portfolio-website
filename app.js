const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const commentInput = document.getElementById('comment');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const commentError = document.getElementById('commentError');
const submit = document.getElementById('submit');

const phoneRegex = /^(?:\+?91|1)?[ -]?[1-9]\d{2}[ -]?\d{3}[ -]?\d{4}$/; // regular expression for 10-digit phone number
const emailRegex = /^\S+@\S+\.\S+$/; // regular expression for email address

form.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Validate form fields
  let errors = false;
  if (nameInput.value === '') {
    nameError.style.display = 'block';
    errors = true;
  } else {
    nameError.style.display = 'none';
  }

  if (emailInput.value === '') {
    emailError.style.display = 'block';
    errors = true;
  } else if (!emailRegex.test(emailInput.value)) { // test email input against regular expression
    emailError.textContent = 'Invalid email format'; // display specific error message for invalid email format
    emailError.style.display = 'block';
    errors = true;
  } else {
    emailError.style.display = 'none';
  }

  if (phoneInput.value === '') {
    phoneError.style.display = 'block';
    errors = true;
  } else if (!phoneRegex.test(phoneInput.value)) { // test phone input against regular expression
    phoneError.textContent = 'Invalid phone number format'; // display specific error message for invalid phone number format
    phoneError.style.display = 'block';
    errors = true;
  } else {
    phoneError.style.display = 'none';
  }

  if (commentInput.value === '') {
    commentError.style.display = 'block';
    errors = true;
  } else {
    commentError.style.display = 'none';
  }

  // Submit form if there are no errors
  if (!errors) {
    form.reset();
  }
});

form.addEventListener('reset', function reset() {
  // Hide all error messages on form reset
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  phoneError.style.display = 'none';
  commentError.style.display = 'none';
});










