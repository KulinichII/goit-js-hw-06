const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');
text.style.fontSize = fontSizeControl.value + 'px';
fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});
