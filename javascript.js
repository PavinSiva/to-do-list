function change(index) {
  let checkbox = document.getElementById(`strikeCheckbox${index}`);
  let textarea = document.getElementById(`textToStrike${index}`);
  if (checkbox.checked) {
      textarea.classList.add('strikeout');
  } else {
      textarea.classList.remove('strikeout');
  }
}
