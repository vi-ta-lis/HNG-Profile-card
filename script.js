function updateTimestamp() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial render
updateTimestamp();

// Update every 1000ms (live ticker effect)
setInterval(updateTimestamp, 1000);

// Contact form validation
const form = document.getElementById("contact-form");
if (form) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const successMessage = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Helper to show error
    function showError(input, message) {
      const errorField = document.getElementById(`error-${input.id}`);
      errorField.textContent = message;
      input.setAttribute("aria-describedby", errorField.id);
      valid = false;
    }

    // Clear old errors
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    // Validation
    if (!nameInput.value.trim()) showError(nameInput, "Name is required");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.trim()) showError(emailInput, "Email is required");
    else if (!emailPattern.test(emailInput.value))
      showError(emailInput, "Invalid email format");

    if (!subjectInput.value.trim())
      showError(subjectInput, "Subject is required");

    if (!messageInput.value.trim())
      showError(messageInput, "Message is required");
    else if (messageInput.value.trim().length < 10)
      showError(messageInput, "Message must be at least 10 characters");

    // If valid
    if (valid) {
      successMessage.hidden = false;
      form.reset();
    }
  });
}
