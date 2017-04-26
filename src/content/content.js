console.log('Just Another Chrome Extension Loaded successfully');
document.addEventListener('DOMContentLoaded', () => {
  const hello = document.createElement('div');
  hello.classList.add('just-another-chrome-extension');
  const text = document.createTextNode('Just Another Chrome Extension');
  hello.appendChild(text);
  document.body.appendChild(hello);
});
