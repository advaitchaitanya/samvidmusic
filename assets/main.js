const copyButton = document.getElementById('copy-btn')
const copyFeedback = document.getElementById('copy-feedback')

copyButton.addEventListener('click', () => {
  const currentUrl = window.location.href

  navigator.clipboard.writeText(currentUrl).then(() => {
    copyFeedback.classList.remove('hidden')
    copyFeedback.classList.add('is-visible')

    setTimeout(() => {
      copyFeedback.classList.remove('is-visible')
      setTimeout(() => copyFeedback.classList.add('hidden'), 300)
    }, 2000)
  }).catch(err => {
    console.error('Failed to copy URL: ', err)
  })
})
