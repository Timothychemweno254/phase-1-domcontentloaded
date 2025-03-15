// index.js
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    if (textElement) {
      textElement.textContent = 'This is really cool!';
    } else {
      console.error('Element with id "text" not found!');
    }
  });