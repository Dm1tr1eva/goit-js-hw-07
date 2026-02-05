const getInput = document.querySelector('input#name-input');
const getSpan = document.querySelector('span#name-output');

getInput.addEventListener('input', () => {
  const name = getInput.value.trim();

  getSpan.textContent = name === '' ? 'Anonymous' : name;
});
