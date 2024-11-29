// Select elements
const copyButton = document.getElementById('copy-btn')
const copyFeedback = document.getElementById('copy-feedback')

// Function to copy the current page URL to the clipboard and show feedback
copyButton.addEventListener('click', () => {
  // Get the current page URL
  const currentUrl = window.location.href

  // Copy the URL to the clipboard
  navigator.clipboard.writeText(currentUrl).then(() => {
    // Show feedback message
    copyFeedback.classList.remove('hidden')
    copyFeedback.classList.add('is-visible')

    // Hide feedback after a delay
    setTimeout(() => {
      copyFeedback.classList.remove('is-visible')
      setTimeout(() => copyFeedback.classList.add('hidden'), 300) // Wait for animation to finish
    }, 2000) // Message is visible for 2 seconds
  }).catch(err => {
    console.error('Failed to copy URL: ', err)
  })
})
