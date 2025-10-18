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
